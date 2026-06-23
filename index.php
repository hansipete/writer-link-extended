<?php

Kirby::plugin('toto/writer-link-extended', [
    'options' => [
        'linkClass' => 'button'
    ],
    'translations' => [
        'en' => [
            'writer-link-extended.linkClass' => option('toto/writer-link-extended.linkClass', 'button'),
            'writer-link-extended.linkClass.label' => 'Add "{class}" class'
        ],
        'de' => [
            'writer-link-extended.linkClass' => option('toto/writer-link-extended.linkClass', 'button'),
            'writer-link-extended.linkClass.label' => '"{class}"-Klasse hinzufügen'
        ]
    ]
]);
