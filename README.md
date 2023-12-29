#Shurija Helper Bundle

Includes useful functions for platform Pimcore v.11

<!-- [TOC] -->

# Installation

1. On your Pimcore 11 root project:
```bash
$ composer require shurija/helper
```

2. Update `config/bundles.php` file:
```bash
return [
    ....
    Shurija\HelperBundle\ShurijaHelperBundle::class => ['all' => true],
];
```