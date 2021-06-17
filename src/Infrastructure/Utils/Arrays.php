<?php

namespace Infrastructure\Utils;

final class Arrays
{
    public static function join(array $value, string $separator): string
    {
        return implode($separator, $value);
    }
}
