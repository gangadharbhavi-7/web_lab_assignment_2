<?php
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                // Retrieve form data
                $firstName = htmlspecialchars($_POST['firstName']);
                $lastName = htmlspecialchars($_POST['lastName']);
                $email = htmlspecialchars($_POST['email']);
                $phone = htmlspecialchars($_POST['phone']);
                $address = htmlspecialchars($_POST['address']);

                // Display the submitted data
                echo "<h2>Registration Successful!</h2>";
                echo "<p><strong>First Name:</strong> $firstName</p>";
                echo "<p><strong>Last Name:</strong> $lastName</p>";
                echo "<p><strong>Email:</strong> $email</p>";
                echo "<p><strong>Phone:</strong> $phone</p>";
                echo "<p><strong>Address:</strong> $address</p>";
            }
            ?>
