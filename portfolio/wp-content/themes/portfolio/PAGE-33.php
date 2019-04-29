

<?php 
if(is_page(33)): 

 get_header('33');

else :
 get_header();

endif;

?>
 <!-- fonction wordpress, permet d'inclure le haut du site, je prends le header.php et je le colle ici -->
<section class="section-cont">
NOUS SOMMES SUR LE TEMPLATE DE PAGE 33

<!-- La condition if permet de vérifier si des articles ont été posté, si oui, la boucle while les passent en revu et les affiches -->
 <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<!-- Le titre h2 permet d'afficher le titre de l'article et sont lien URL (the_permalink) -->
<h2 class="display-4 text-center mt-3"><a href="<?php the_permalink(); ?>" class="text-light"><?php the_title(); ?></a></h2>

 <!-- Affiche la Date. -->
 

<!-- Affiche le corps (Content) de l'Article dans un bloc div. -->
 <div class="container mon_container">
    <small><?php the_time('F jS, Y'); ?></small><hr>
   <?php the_content(); ?>
 </div>

 <?php endwhile; else: ?>
<!-- On tombe dans la condition else dans le cas ou aucun article n'a été posté, donc on affiche un message d'erreur -->
 <p>Contenu non trouvé !!!</p>

 <?php endif; ?>


<?php 
if(is_page(33)): 

 get_footer('f_cont-33');

else :
 get_footer();

endif;
?>
