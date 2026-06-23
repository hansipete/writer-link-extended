<?php

Kirby::plugin('toto/writer-link-extended', [
    'options' => [
        'linkClass' => 'button',
        'linkClassLabel' => null
    ],
    'translations' => [
        'en' => [
            'writer-link-extended.linkClass' => option('toto/writer-link-extended.linkClass', 'button'),
            'writer-link-extended.linkClass.label' => option('toto/writer-link-extended.linkClassLabel') ?? 'Add "{class}" class'
        ],
        'de' => [
            'writer-link-extended.linkClass' => option('toto/writer-link-extended.linkClass', 'button'),
            'writer-link-extended.linkClass.label' => option('toto/writer-link-extended.linkClassLabel') ?? '"{class}"-Klasse hinzufügen'
        ]
    ]
]);
