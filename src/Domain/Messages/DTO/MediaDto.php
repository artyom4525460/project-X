<?php

namespace Domain\Messages\DTO;

use Domain\Messages\Enums\MediaTypeEnum;
use Illuminate\Support\Str;
use Infrastructure\DTO\BaseDto;
use InvalidArgumentException;

final class MediaDto extends BaseDto
{
    public ?string $file;
    public ?string $url;
    public MediaTypeEnum $type;

    public function validate(): void
    {
        if (!$this->file && !$this->url) {
            throw new InvalidArgumentException("No [file] and [url] media params.");
        }

        if ($this->file && $this->url) {
            throw new InvalidArgumentException("Both [file] and [url] media params are passed.");
        }

        if ($this->file) {
            $base64 = Str::of(substr($this->file, 0, 20));

            if ($this->type->is(MediaTypeEnum::Photo) && !$base64->startsWith('data:image/')) {
                throw new InvalidArgumentException("Param [file] has invalid [photo] content type.");
            }

            if ($this->type->is(MediaTypeEnum::Audio) && !$base64->startsWith('data:audio/')) {
                throw new InvalidArgumentException("Param [file] has invalid [audio] content type.");
            }
        }
    }
}
