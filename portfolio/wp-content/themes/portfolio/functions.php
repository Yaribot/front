<?php
add_action('widgets_init', 'portfolio_init_sidebar'); // On créer un 'hook', c'est à dire qu'on accroche une fonction de worprress pour pouvoir d'en servir
// widgets_init -> fonction worpress
// portfolio_init_sidebar -> fonction utilisateur que l'on va déclarer cidessous

add_action('init', 'portfolio_init_menu'); // permet  de récupérer les fonctionnalitées du menu wordpress dans le backOffice

// fonction permettant de créer des régions, on les retrouvent dans le backoffice de wordpress dans apparences -> widgets
function portfolio_init_sidebar()
{
    // register_sidebar() fonction qui permet une région que l'ion retrouve dans les widgets
    register_sidebar(array(
        'name' =>__('haut gauche', 'portfolio'),
        'id'   => 'haut-gauche',
        'description' => __('région en haut à gauche', 'portfolio')
    ));

    register_sidebar(array(
        'name' =>__('haut centre', 'portfolio'),
        'id'   => 'haut-centre',
        'description' => __('région en haut au centre', 'portfolio')
    ));

    register_sidebar(array(
        'name' =>__('haut droit', 'portfolio'),
        'id'   => 'haut-droit',
        'description' => __('région en haut à droite', 'portfolio')
    ));

    register_sidebar(array(
        'name' =>__('entetes', 'portfolio'),
        'id'   => 'entetes',
        'description' => __('région entetes', 'portfolio')
    ));

    register_sidebar(array(
        'name' =>__('bas gauche', 'portfolio'),
        'id'   => 'bas-gauche',
        'description' => __('région en bas à gauche', 'portfolio')
    ));

    register_sidebar(array(
        'name' =>__('bas centre', 'portfolio'),
        'id'   => 'bas-centre',
        'description' => __('région en bas au centre', 'portfolio')
    ));

    register_sidebar(array(
        'name' =>__('bas droit', 'portfolio'),
        'id'   => 'bas-droit',
        'description' => __('région en bas à droite', 'portfolio')
    ));
}

// fonction qui permet de créer le menu principal du thème portefolio que nous avons ensuite positionné dans le code
function portfolio_init_menu()
{
    register_nav_menu('primary',__('primary menu', 'portfolio'));
}

// EXO : créer les differentes régions : haut-centre, haut-droit, entetes, bas-gauche, bas-centre, bas-droit

