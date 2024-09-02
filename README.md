# legal_center

## Roles

1. admin
2. lawyer
3. moderator
4. client

## Code Conventions

1. Functions => (camelCase) e.g getClientsData()
2. Variable => (if made with minimum two words then it show be seperated by underscore(_) with only small alphabets) e.g $show_clients = null
3. Models => (Singular and first letter will be Capital)
4. Controllers => Controller class names should be in singular, PascalCase, and end with "Controller." For example, if you have a resource related to clients, the controller would be named ClientsController.

## Technologies

1. Laravel
2. Vue Js
3. Mysql
4. Flutter
5. Bootstrap
6. Sockets
7. Redis
8. Apis

## Color Scheme

1. #11548d
2. black
3. white


First we will create certificates
Copy the files mkcert.exe and gen-cert.bat from this link:

https://drive.google.com/file/d/1dUR2E9Srzf7rwpUq6s8wyB5BDBw7hBvx/view?usp=sharing

and paste in C:/xampp/apache/cert/ (Create cert folder if you don't find it)

Open Command Prompt with Administrator privileges and execute gen-cert.bat file
Enter the domain name legalcenter.cc

You will find the new folder name legalcenter.cc with SSL certificates

Now go to C:/xampp/apache/conf/extra/ and open the file named 'httpd-vhosts.conf'

Add the following entry in that file

```
# legalcenter.cc
<VirtualHost 127.0.0.1:80>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteCond %{SERVER_NAME} =legalcenter.cc [OR]
    RewriteCond %{SERVER_NAME} =www.legalcenter.cc
    RewriteRule ^ https://%{SERVER_NAME}%{REQUEST_URI} [END,NE,R=permanent]
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R,L]

    DocumentRoot "C:/xampp/htdocs/legal_center/public"
    DirectoryIndex index.php
    ServerName legalcenter.cc
    ServerAlias www.legalcenter.cc
    <Directory "C:/xampp/htdocs/legal_center/public">
        Options Indexes FollowSymLinks Includes MultiViews ExecCGI
        AllowOverride All
        Order Deny,Allow
        Allow from all
        Require all granted
        FallbackResource /index.php
    </Directory>
    LimitRequestFieldSize 500000

</VirtualHost>

<VirtualHost 127.0.0.1:443>

        SSLEngine On
        SSLCertificateFile "C:/xampp/apache/cert/legalcenter.cc/cert.pem"
        SSLCertificateKeyFile "C:/xampp/apache/cert/legalcenter.cc/key.pem"

        ServerName legalcenter.cc
        ServerAlias www.legalcenter.cc

        DocumentRoot "C:/xampp/htdocs/legal_center/public"
        DirectoryIndex index.php

        <Directory "C:/xampp/htdocs/legal_center/public">
                Options Indexes FollowSymLinks Includes MultiViews ExecCGI
                AllowOverride All
                Require all granted
                FallbackResource /index.php
        </Directory>
        LimitRequestFieldSize 500000

</VirtualHost>
```

Adjust the document root based on your project root folder name. Save and Close the file

After that go to C:/Windows/System32/drivers/etc and edit the file hosts 
add the following entry at the end of the file

```
127.0.0.1   legalcenter.cc 
```

Save and Close the file.