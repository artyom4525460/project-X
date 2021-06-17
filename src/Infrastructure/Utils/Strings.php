<?php

namespace Infrastructure\Utils;

final class Strings
{
    public static function split(string $value, string $separator): array
    {
        return $value ? explode($separator, $value) : [];
    }
}
