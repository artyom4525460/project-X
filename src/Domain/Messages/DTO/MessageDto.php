<?php

namespace Domain\Messages\DTO;

use Domain\Messages\Enums\MediaTypeEnum;
use Illuminate\Http\Request;
use Infrastructure\DTO\BaseDto;

final class MessageDto extends BaseDto
{
    public MediaDto $media;
    public ParticipantDto $sender;
    public ParticipantDto $recipient;
    public CardDto $card;

    public static function create(Request $request): MessageDto
    {
        $media = new MediaDto();
        $media->file = $request->input('media.file');
        $media->url = $request->input('media.url');
        $media->type = MediaTypeEnum::create($request->input('media.type'));
        $media->validate();

        $sender = new ParticipantDto();
        $sender->name = $request->input('sender.name');
        $sender->phoneNumber = $request->input('sender.phoneNumber');
        $sender->emailAddress = $request->input('sender.emailAddress');

        $recipient = new ParticipantDto();
        $recipient->name = $request->input('recipient.name');
        $recipient->phoneNumber = $request->input('recipient.phoneNumber');
        $recipient->emailAddress = $request->input('recipient.emailAddress');

        $card = new CardDto();
        $card->id = $request->input('card.id');

        $dto = new MessageDto();
        $dto->media = $media;
        $dto->sender = $sender;
        $dto->recipient = $recipient;
        $dto->card = $card;

        return $dto;
    }
}
