<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Database\Eloquent\Collection;
use Infrastructure\Concerns\Login;
use Osiset\ShopifyApp\Actions\DispatchWebhooks;

class DispatchWebhooksCmd extends Command
{
    use Login;

    protected $signature = 'webhooks:dispatch {shop?}';
    protected $description = 'Dispatch webhooks';

    private DispatchWebhooks $dispatchWebhooksAction;

    public function __construct(DispatchWebhooks $dispatchWebhooksAction)
    {
        parent::__construct();

        $this->dispatchWebhooksAction = $dispatchWebhooksAction;
    }

    public function handle(): int
    {
        $this->getUsers()->each(function (User $user) {
            $shop = $this->loginUsingShopId($user->getId());

            $this->info("Processing $shop->name");

            $this->dispatchWeebhooks($shop);
        });

        $this->info("Done");

        return 0;
    }

    private function getUsers(): Collection
    {
        if ($shop = $this->argument('shop')) {
            return User::query()->where('name', $shop)->get();
        }

        return User::all();
    }

    private function dispatchWeebhooks(User $shop): void
    {
        call_user_func($this->dispatchWebhooksAction, $shop->getId(), false);

        $this->line('Webhooks dispatched');
    }
}
