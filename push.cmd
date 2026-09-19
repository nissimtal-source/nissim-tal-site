@echo off
set PATH=C:\Program Files\Git\bin;C:\Program Files\Git\cmd;%PATH%
cd /d "%~dp0"

git add -A -- src public

git diff --cached --quiet
if errorlevel 1 (
    git commit -m "Update site content"
) else (
    echo No pending content changes to commit.
)

git push origin main

echo.
echo Done. Press any key to close this window.
pause >nul
