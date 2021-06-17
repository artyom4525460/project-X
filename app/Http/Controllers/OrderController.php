<?php

namespace App\Http\Controllers;

use Domain\Orders\Actions\FindOrderByIdentificationAction;
use Domain\Orders\DTO\OrderDto;
use Domain\Orders\DTO\OrderIdDto;
use Domain\Orders\Enums\OrderNoteAttributeEnum;
use Domain\Orders\Repositories\OrderRepository;
use Domain\Orders\Requests\OrderRequest;
use Domain\Orders\Utils\OrderUtils;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    private OrderRepository $orderRepository;
    private FindOrderByIdentificationAction $findOrderByIdentificationAction;

    public function __construct(
        OrderRepository $orderRepository,
        FindOrderByIdentificationAction $findOrderByIdentificationAction
    )
    {
        $this->orderRepository = $orderRepository;
        $this->findOrderByIdentificationAction = $findOrderByIdentificationAction;
    }

    public function index(Request $request)
    {
        $filters = OrderRequest::create($request);

        $orders = $this->orderRepository->get($this->me(), $filters->period);

        return view('orders', compact('orders'));
    }

    public function show(Request $request, int $orderNumber): array
    {
        $request->validate(['shop' => 'required']);

        $order = $this->orderRepository->findByOrderNumber($request->input('shop'), $orderNumber);
        abort_if(!$order, 404);

        $dto = new OrderDto();
        $dto->orderNumber = $order->orderNumber;
        $dto->canderMessageId = $order->canderMessageId;

        return $dto->toArray();
    }

    public function details(Request $request): array
    {
        $dto = OrderIdDto::create($request);

        $so = $this->findOrderByIdentificationAction->execute($dto, ['id', 'note_attributes']);

        abort_if(!$so, 404);

        $order = $this->orderRepository->findByOrderId($so['id'], ['cander_message_id']);

        return [
            'canderMessageId' => $order ? $order->canderMessageId : null,
            'identity' => OrderUtils::getNoteAttribute($so, OrderNoteAttributeEnum::IDENTITY)
        ];
    }
}
