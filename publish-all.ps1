$ErrorActionPreference = "Continue"

$OWNER = "SmartAppForge"

Write-Host ""
Write-Host "============================================="
Write-Host " NURSING SUCCESS HUB - PUBLICATION MASSIVE"
Write-Host "============================================="
Write-Host ""

# Vérifier GitHub CLI
gh auth status
if ($LASTEXITCODE -ne 0) {
    Write-Host "GitHub CLI n'est pas authentifié."
    exit
}

# Récupérer identité GitHub
$LOGIN = gh api user --jq .login
$EMAIL = "$LOGIN@users.noreply.github.com"

git config --global user.name $LOGIN
git config --global user.email $EMAIL

$ROOT = Get-Location

# Toutes les applications = dossiers contenant index.html
$APPS = Get-ChildItem -Directory | Where-Object {
    Test-Path (Join-Path $_.FullName "index.html")
}

Write-Host ""
Write-Host "Applications detectees :" $APPS.Count
Write-Host ""

foreach ($APP in $APPS) {

    $NAME = $APP.Name
    $REPO = "nursing-success-hub-$NAME"
    $PATH = $APP.FullName

    Write-Host ""
    Write-Host "============================================="
    Write-Host " APPLICATION : $NAME"
    Write-Host " REPOSITORY  : $OWNER/$REPO"
    Write-Host "============================================="

    Set-Location $PATH

    # Initialiser Git si nécessaire
    if (!(Test-Path ".git")) {
        Write-Host "Initialisation Git..."
        git init
    }

    # Branche main
    git branch -M main

    # Ajouter les fichiers
    git add .

    # Commit uniquement si nécessaire
    git diff --cached --quiet
    if ($LASTEXITCODE -ne 0) {
        git commit -m "Initial production release"
    }

    # Vérifier si le repository GitHub existe
    gh repo view "$OWNER/$REPO" *> $null

    if ($LASTEXITCODE -ne 0) {

        Write-Host "Creation du repository GitHub..."

        gh repo create "$OWNER/$REPO" `
            --public `
            --source=. `
            --remote=origin `
            --push

    } else {

        Write-Host "Repository deja existant."

        # Vérifier remote
        $REMOTE = git remote get-url origin 2>$null

        if (!$REMOTE) {
            git remote add origin "https://github.com/$OWNER/$REPO.git"
        }

        git push -u origin main
    }

    # Activer GitHub Pages
    Write-Host "Activation GitHub Pages..."

    $JSON = @{
        source = @{
            branch = "main"
            path   = "/"
        }
    } | ConvertTo-Json -Compress

    gh api `
        --method POST `
        "repos/$OWNER/$REPO/pages" `
        --input - <<< $JSON 2>$null

    if ($LASTEXITCODE -ne 0) {
        Write-Host "Pages deja active ou API Pages deja configuree."
    }

    Write-Host ""
    Write-Host "OK : https://$OWNER.github.io/$REPO/"
}

Set-Location $ROOT

Write-Host ""
Write-Host "============================================="
Write-Host " PUBLICATION TERMINEE"
Write-Host "============================================="
Write-Host ""