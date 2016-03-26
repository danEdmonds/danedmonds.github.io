<?php 
include('header.php'); 
$page = 'home'; ?>

    <section class="module">
        <div class="layout-container">
            <h2>Areas of Practice</h2>
            <div class="cards">
                <div class="card">
                    <div class="card-hero">
                        <h3 class="card-title"><a href="real-estate-law.php">Real Estate Law</a></h3>
                        <p class="card-description">Arnett Law Serves Morgantown and North Central West Virginia</p>
                    </div>
                    <a href="real-estate-law.php" class="card-extension">Learn More</a>
                </div>
                <div class="card">
                    <div class="card-hero">
                        <h3 class="card-title"><a href="personal-injury-law.php">Personal Injury Law</a></h3>
                        <p class="card-description">Arnett Law Takes It Personally</p>
                    </div>
                    <a href="personal-injury-law.php" class="card-extension">Learn More</a>
                </div>
                <div class="card">
                    <div class="card-hero">
                        <h3 class="card-title"><a href="wills-trusts-and-estate-planning.php">Wills, Trusts, and Estate Planning</a></h3>
                        <p class="card-description">At Arnett Law, Your Goals are Our Goals</p>
                    </div>
                    <a href="wills-trusts-and-estate-planning.php" class="card-extension">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <section class="module about">
        <!--<img src="images/arnett-family.jpg" style="position: absolute; top: 0; left: 0; height: 100%;">-->
        <div class="layout-container">
            <h2>Learn About Jeffrey L. Arnett</h2>
            <a href="about-jeffrey-l-arnett.php" class="button solid-button">Learn More</a>
        </div>
    </section>

    <!--<section class="module testimonials">
        <div class="layout-container">
            <h2 class="testimonials-title">Testimonials</h2>
            <div class="testimonial">
                <p>Testimonial</p>
            </div>
        </div>
    </section>-->

    <div class="layout-container">
        <?php include('navigation.php'); ?>
    </div>

    <?php include('contact-module.php'); ?>

<?php include('footer.php'); ?>