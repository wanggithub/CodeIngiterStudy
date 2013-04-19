@echo off
echo Starting PHP FastCgi
RunHiddenConsole d:/php5.4.14/php-cgi.exe -b 127.0.0.1:9000 -c conf/php.ini

echo Starting Nginx
e:/Tools/nginx/nginx.exe -c conf/nginx.conf

pause