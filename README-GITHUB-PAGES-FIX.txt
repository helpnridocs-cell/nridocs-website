# NRIDocs V6.1 — GitHub Pages Fixed Package

## Important deployment structure

Upload the CONTENTS of this ZIP directly into the ROOT of your GitHub repository.

The repository should look like:

index.html
about.html
services.html
countries.html
contact.html
privacy.html
assets/
  styles.css
  script.js
  nridocs-logo.svg
services/
  pcc.html
  oci.html
  apostille.html
  ...

DO NOT upload the ZIP file itself.
DO NOT put everything inside another folder such as `NRIDocs-V6.1-Corrected/`.
DO NOT put the files inside a second `1/` folder unless your Pages configuration is specifically publishing that folder.

## GitHub Pages

1. Open the repository.
2. Upload all files and folders from this ZIP.
3. Go to Settings -> Pages.
4. Under Build and deployment choose:
   - Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)
5. Save and wait for deployment.

## Why the original package looked unstyled

The root pages correctly referenced `assets/styles.css`, but the pages inside `services/` incorrectly referenced `assets/styles.css` instead of `../assets/styles.css`. Those service pages have been corrected in this package.

If the HOME page still appears as plain text after deployment, the most likely issue is that `assets/styles.css` was not uploaded to GitHub or the repository is publishing a different folder than the one containing `index.html` and `assets/`.

## Quick test

After deployment, open:

/assets/styles.css

For example:

https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/assets/styles.css

If the CSS file opens as text, the asset path/deployment is working.
