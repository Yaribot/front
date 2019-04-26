<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'theme_enfant' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'X}]GQi+[;*-Kcx{$E1w%MkLvhDQ+_6@G?!R|W)KEoJgZ-atJ}4rje1~gSz8Pk!eA' );
define( 'SECURE_AUTH_KEY',  ']MEK:%@Pl?w={]J+d]u>(42-l$NjV^5IQ-Q0<^u5}RpbtK` +4lh,; $_ATxI(7@' );
define( 'LOGGED_IN_KEY',    'J]z5A![$Jh:&ju/[&}W@WOd:TG>Q5^#Kv(KG`zEh=*#A 0lrlRUG_^em?; r:`1x' );
define( 'NONCE_KEY',        'k5QiH7)Bpt$u$rWt(M<3%8(]0o6<g&+X(B^^U/s0 {A`e2,r(.TkfKd:SZL~Vaa3' );
define( 'AUTH_SALT',        '@vAcy:eqz6~Ng)@r/fJlfO`phyPY}0+K`M4|-5..)CCT4};t6XX:2I$!)U1/$w:k' );
define( 'SECURE_AUTH_SALT', '8Ba!s|A.Ld:S_$.CzXZ|Vofo`:Fih.0pTqg/q*V%7]!j<!Rm%;_^^:))+k3|W-SO' );
define( 'LOGGED_IN_SALT',   'psK_I5{^y8lsMNYQG!C]pmu|.l}x[^mTSMCtfot:RQs|c.|~Q^Z@M/O3Jz`B?2Sk' );
define( 'NONCE_SALT',       '58>{o&FlQNW6K{RPcT~&9MO6bnQbqDvQmdI5 =DMmVx)x}bs3#4Zsq*Xc*(ySRxx' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
