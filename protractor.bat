set BASE_DIR=%~dp0
set webdriver=%BASE_DIR%\node_modules\grunt-protractor-runner\node_modules
%webdriver%\.bin\protractor ..\%BASE_DIR%\e2e\protractor.conf.js