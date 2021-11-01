<?php
/**
* The template for displaying pages
*
* This is the template that displays all pages by default.
* Please note that this is the WordPress construct of pages and that
* other "pages" on your WordPress site will use a different template.
*
* @package WordPress
* @subpackage Twenty_Sixteen
* @since Twenty Sixteen 1.0
*/
$hm = esc_url( home_url( '' ) );
$td = get_stylesheet_directory_uri();
$page = get_post( get_the_ID() );
get_header(); ?>

<div id="primary" class="com-content-area">
	<main id="main" class="site-main coffee-chatting" role="main">
		<div class="main_img">
			<img src="<?php echo $td; ?>/images/coffee-chatting/main_img.jpg" alt="Takashi Naruse COFFEE CHATTING 成瀬昂のコーヒーチャット">
		</div>
		<div class="syusi">
			<h2>趣旨</h2>
			<div class="txt">
				<?php echo get_field('syusi');; ?>
			</div>
			<a href="<?php echo $hm; ?>/coffee-chatting/#contact" class="contact_anc">このページ下部に新規参加登録フォームがあります</a>
		</div>
		<ul class="movie_li">
			<?php
			$post_terms = wp_get_object_terms($post->ID, $taxonomy_slug);
			if( $post_terms && !is_wp_error($post_terms)) {
				$terms_slug = array();
				foreach( $post_terms as $value ){
					$terms_slug[] = $value->slug;
				}
			}
			$args = array(
				'post_type' => 'movies',
				'tax_query' => array(
					array(
						'taxonomy' => 'mov_cat',
						'field' => 'slug',
						'terms' => 'coffee',
					),
				),
			);
			$the_query = new WP_Query($args); if($the_query->have_posts()):
				?>
				<?php while ($the_query->have_posts()): $the_query->the_post();?>
					<?php
					$date = get_the_date('Y.m.d');
					$tube_id = get_field('tube_id');
					?>
					<li>
						<iframe src="https://www.youtube.com/embed/<?php echo $tube_id; ?>" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						<div class="tl"><?php the_title(); ?></div>
					</li>
				<?php endwhile; ?>
				<?php wp_reset_postdata(); ?>
			<?php endif; ?>
		</ul>
		<?php
		$post_terms = wp_get_object_terms($post->ID, $taxonomy_slug);
		if( $post_terms && !is_wp_error($post_terms)) {
			$terms_slug = array();
			foreach( $post_terms as $value ){
				$terms_slug[] = $value->slug;
			}
		}
		$args = array(
			'post_type' => 'seminar',
		);
		$the_query = new WP_Query($args); if($the_query->have_posts()):
			?>
			<?php while ($the_query->have_posts()): $the_query->the_post();?>
				<?php
				$date = get_the_date('Y.m.d');
				$sem_img_1 = get_field('sem_img_1');
				$sem_img_2 = get_field('sem_img_2');
				$sem_img_3 = get_field('sem_img_3');
				?>
				<ul class="img_li">
					<?php
					if($sem_img_1){
						?>
						<li>
							<div class="img"><img src="<?php echo $sem_img_1; ?>" alt=""></div>
							<div class="tl"><?php the_title(); ?></div>
						</li>
					<?php } ?>
					<?php
					if($sem_img_2){
						?>
						<li>
							<div class="img"><img src="<?php echo $sem_img_2; ?>" alt=""></div>
							<div class="tl"><?php the_title(); ?></div>
						</li>
					<?php } ?>
					<?php
					if($sem_img_3){
						?>
						<li>
							<div class="img"><img src="<?php echo $sem_img_3; ?>" alt=""></div>
							<div class="tl"><?php the_title(); ?></div>
						</li>
					<?php } ?>
				</ul>
			<?php endwhile; ?>
			<?php wp_reset_postdata(); ?>
		<?php endif; ?>
		.seminar
	</main>
	<?php get_sidebar( 'content-bottom' ); ?>
</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
