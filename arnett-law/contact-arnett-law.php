<?php include('header.php'); ?>
    
    <div class="layout-container">
        <div class="bp">
            <article class="bp-content">
                <h1>Contact Arnett Law</h1>
                <div id="form-messages"></div>
                <form id="ajax-contact" class="form" method="post" action="mailer.php">
                    <ul>
                        <li>
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required>
                        </li>
                        <li>
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </li>
                        <li>
                            <label for="phone">Phone</label>
                            <input type="tel" id="phone" name="phone">
                        </li>
                        <li>
                            <label for="message">Message</label>
                            <textarea id="message" name="message" required></textarea>
                        </li>
                        <li>
                            <button type="submit" class="button solid-button">Send</button>
                        </li>
                    </ul>
                </form>
                <h3>Arnett Law Location</h3>
                <p>711 Greenbag Road<br>
                    Morgantown, WV 26508</p>
                <div class="google-map">
                    <iframe style="width: 100%;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.730235667343!2d-79.93917928462847!3d39.610758979466915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88357cbea650a2b3%3A0x1577f49f6a3eb311!2s711+Green+Bag+Rd%2C+Morgantown%2C+WV+26508!5e0!3m2!1sen!2sus!4v1457626815914" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
                <h3>Contact Arnett Law</h3>
                <p>(304) 292-03604</p>
                <!--<a href="contact-arnett-law.php" class="button solid-button">Email Us</a>-->
                <h3>Business Hours</h3>
                <p>Monday-Friday: 9 a.m.-5 p.m.<br>
                    Weekends by appointment</p>
                <h3>Payment Methods</h3>
                <ul class="payment-methods">
                    <li>Visa</li>
                    <li>MasterCard</li>
                    <li>Discover</li>
                    <li>Cash</li>
                    <li>Check</li>
                </ul>                                
            </article>
            <?php include('navigation.php'); ?>
        </div>
    </div>

<?php include('footer.php'); ?>