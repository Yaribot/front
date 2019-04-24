<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'portfolio_vitry' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '$5J!4LNx>?K/<*y(USts$2a6OAKitTy|p5u#-KV-Y)%Jm3#w7Z3~&-,_;p4t[0O|' );
define( 'SECURE_AUTH_KEY',  'QLzH1RN<{*~qH&QF,Nb^2=JaJ/n Brt@~jGShX)$!T`mH^m-6&;=SFKIu&OjeIcs' );
define( 'LOGGED_IN_KEY',    'Z_s]I1FWz;BIl|3*4OR)#+|9tK?_cQ$<)O$Yuq@k3yVmi:1%T&]:]PG;[CjiI mQ' );
define( 'NONCE_KEY',        'iKqS<J{!K7F2lmeLtVJ^quJw$g$./CE+3c`pW:_Q}fir]sNAIAdlB|`Ne:P1e/_D' );
define( 'AUTH_SALT',        ':P:+@};t9tiL@R^wyrGIKoOX_fhiicPWZXJ5*IqzEa%slgM&oNL,G$)$R#>.gO1s' );
define( 'SECURE_AUTH_SALT', 'E.z]vZoO>S^T#7r-o[s6J.R7k9h9Bqy;*Ph;w>Y2+?izv>6`}D~1.{9r*OJYs9rS' );
define( 'LOGGED_IN_SALT',   '%`0.-H;oaZ}5pfp^+A*9YKKx@zy$kB46Vt-x;2xez4j6q^JkeSqUihQbhXZp%H<*' );
define( 'NONCE_SALT',       'uj5`,xT<FG?[[S<R992RbLJ[ex:3;43WwyQ:.S?r@u.c!{VCcKW5?*EhMWRoW*(3' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wp_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
