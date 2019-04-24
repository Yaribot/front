<!DOCTYPE html>
<html <?php language_attributes(); //fonction wordpress qui retourne la langue du site ?>>
<head>
    <meta charset="<?php bloginfo('charset'); //retourne le bon encodage ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <link href="https://fonts.googleapis.com/css?family=Luckiest+Guy" rel="stylesheet"> 

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


    <link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/style.css"> <!-- bloginfo('template_directory'); est une fonction wordpress qui retourne l'URL du thème portfolio -->

    <title><?php bloginfo('name'); ?></title>

    <?php wp_head(); //wp_head permet de charger des fichier indispensable à wordpress (fichier js, css, etc...) et permet de récupérer la sidebar noire en heut de la page  ?>

</head>
<body <?php body_class(); //appel à des classes de wordpress ?>>

<div class="container-fluid px-0">

    <div class="d-flex">

        <div class="col-md-4 bg-transparent hauteur">
            <?php dynamic_sidebar('haut-gauche') ?>
            <!-- dynamic_sidebar() fonction qui permet de faire appel aux régions que l'on a créer dans le fichier functions.php -->

        </div>


        <div class="col-md-4 bg-transparent hauteur">
            <?php dynamic_sidebar('haut-centre') ?>

        </div>


        <div class="col-md-4 bg-transparent hauteur">
            <?php dynamic_sidebar('haut-droit') ?>

        </div>

    </div>

    <nav class="navbar navbar-expand navbar-dark bg-dark">
       
    <a class="navbar-brand" href="#"><?php bloginfo('name'); ?></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarsExample02">
            <ul class="navbar-nav mr-auto">
                <!-- wp_nav_menu() fonction wordpress qui permet d'importer le menu principal que l'on a créer dans le fichier functions.php 
                container_class => 'menu_header' : le menu aura comme class 'menu-header'
                'theme_location' => 'primary' : permet de préciser que c'est le menu principal  -->
                <?php wp_nav_menu(array('container_class' => 'menu_header', 'theme_location' => 'primary')) ?>
            </ul>
            <form class="form-inline my-2 my-md-0">
                <input class="form-control" type="text" placeholder="Search">
            </form>
    </div>
    </nav>

    <div class="col-md-12 px-0 bg-transparent h-entetes">
        <?php dynamic_sidebar('entetes') ?>
    </div>

</div>

<section class="ma-section">
    
