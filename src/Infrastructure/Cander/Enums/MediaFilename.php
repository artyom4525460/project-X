<?php

namespace Infrastructure\Cander\Enums;

use Domain\Messages\Enums\MediaTypeEnum;

final class MediaFilename
{
    const Text = 'content.txt';
    const Photo = 'image.jpg';
    const Audio = 'audio.wav';
    const Video = 'video.mp4';

    public static function create(MediaTypeEnum $type): ?string
    {
        switch ($type->value()) {
            case MediaTypeEnum::Text:
                return MediaFilename::Text;
            case MediaTypeEnum::Photo:
                return MediaFilename::Photo;
            case MediaTypeEnum::Audio:
                return MediaFilename::Audio;
            case MediaTypeEnum::Video:
                return MediaFilename::Video;
            default:
                return null;
        }
    }
}
