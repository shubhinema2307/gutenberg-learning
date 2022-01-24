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
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Fyd/4H3QOSf9eB83HDpaJZ+I2OlMH/+UQfHgYf7Oz9NbVmiOYLnY/QWJil2CP+IJmmDlkRSWlR6ZbKuEaiW4mw==');
define('SECURE_AUTH_KEY',  'byuGRbZPRbh6NCxejovpjo3giraUnU3q3f46e3VEAL01HBGo7bPm7OGuXSiYqW7rrpsm5DPcbcZZvr6a+Ovu7w==');
define('LOGGED_IN_KEY',    'buE6o+BaOisgwtRqkmPCrWog/sj4ueSK2Z7Xi2shvnqPcXUPtve+Os9JWRszjGzRpLgHgxJz/h4I5QNWiDs9/g==');
define('NONCE_KEY',        'lyN+M0CuVeqn+6nM86IJJte4T3tV7DKqXZ3KuWSHN8Nl59Izf0wLhNT8amSn5m6XVmLbCaBbsiZu/NpRHbgQ1A==');
define('AUTH_SALT',        'y8asWP4Dfyxo2JkkteJVukh3OJ82JgfNdHkd5nd/R+/NF1Z37wJMcuLOY0jpIn4BBVfk9JBF7c3e4bbmO6jovg==');
define('SECURE_AUTH_SALT', 'R2v3FLGP+LpZYIFcPIpv9nijOFEN17AKWZw7jPr/ico1KXguZOQfXnyW2CJq4gpe4uCJhgJhoo3JGAXRjhbaKg==');
define('LOGGED_IN_SALT',   'j7K+HH+7oBFj//iUh2JKwIoWwyKu/RE7apSZsqWxNaJj+xAmibTH6aBuaiS5UnTsyw+3Yg3Ak2Sn0+smMku/UA==');
define('NONCE_SALT',       'NcSIRcos+csBcTePU8HVcbhEzkGYI1lwvfaa0FnR7HqpBDs4J0PlkxxG6dWhf/g4wu+pBHILjMY2Xvro9x3lFA==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
