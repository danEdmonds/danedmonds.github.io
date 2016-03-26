<?php include('header.php'); ?>
    
    <div class="layout-container">
        <div class="bp">
            <div>
                <h1>Contact Arnett Law</h1>
<form id="ajax-contact" method="post" action="mailer.php">
    <div class="field">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required>
    </div>

    <div class="field">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
    </div>

    <div class="field">
        <label for="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
    </div>

    <div class="field">
        <button type="submit">Send</button>
    </div>
</form>

<div id="form-messages"></div>
                <!--<form class="form">
                    <ul>
                        <li>
                            <label>Name</label>
                            <input type="text">
                        </li>
                        <li>
                            <label>Email</label>
                            <input type="email">
                        </li>
                        <li>
                            <label>Phone</label>
                            <input type="tel">
                        </li>
                        <li>
                            <label>Message</label>
                            <textarea></textarea>
                        </li>
                        <li>
                            <input type="submit" value="Send" class="button">
                        </li>
                    </ul>
                </form>-->
                <h2>Business Hours</h2>
                <p>Monday-Friday 9 a.m.-5 p.m.<br>
                    Weekends by appointment</p>

                <p>304-29203604</p>

                <h2>Connect with Arnett Law</h2>
                <p>Facebook
                Twitter
                YouTube</p>

                <h2>Payment Methods</h2>
                <ul>
                    <li>Visa</li>   
                    <li>MasterCard</li> 
                    <li>Discover</li> 
                    <li>Cash</li>  
                    <li>Check</li>
                </ul>
                <h2>Arnett Law Location</h2>
                <p>711 Greenbag Road<br>
                    Morgantown, WV 26508</p>
                <div class="google-map">
                    <iframe style="width: 100%;" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3073.730235667343!2d-79.93917928462847!3d39.610758979466915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88357cbea650a2b3%3A0x1577f49f6a3eb311!2s711+Green+Bag+Rd%2C+Morgantown%2C+WV+26508!5e0!3m2!1sen!2sus!4v1457626815914" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>                                   
            </div>
            <?php include('navigation.php'); ?>
        </div>
    </div>

<?php include('footer.php'); ?>