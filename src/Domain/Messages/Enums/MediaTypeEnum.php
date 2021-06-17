<?php

namespace Domain\Messages\Enums;

use InvalidArgumentException;

final class MediaTypeEnum
{
    const Text = 'Text';
    const Photo = 'Photo';
    const Audio = 'Audio';
    const Video = 'Video';

    private string $value;

    public static function create(string $value): MediaTypeEnum
    {
        $values = [
            MediaTypeEnum::Text,
            MediaTypeEnum::Photo,
            MediaTypeEnum::Audio,
            MediaTypeEnum::Video
        ];

        if (!in_array($value, $values)) {
            throw new InvalidArgumentException("Invalid [$value] media type.");
        }

        return new MediaTypeEnum($value);
    }

    public function __construct(string $value)
    {
        $this->value = $value;
    }

    public function value(): string
    {
        return $this->value;
    }

    public function is(string $value): bool
    {
        return $this->value == $value;
    }
}
