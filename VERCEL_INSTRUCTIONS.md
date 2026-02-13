# Fix Vercel Build Error: `vite: command not found`

The error occurs because Vercel is trying to build your project from the root directory, but your React application lives inside the `frontend` folder.

## Solution

To fix this, you must tell Vercel to treat the `frontend` directory as the project root.

1.  Go to your Vercel Project Dashboard.
2.  Click on the **Settings** tab.
3.  In the **General** section, locate the **Root Directory** setting.
4.  Click **Edit** and enter `frontend` in the input field.
5.  Click **Save**.
6.  Go to the **Deployments** tab and redeploy the latest commit (or trigger a new build).

Once you do this, Vercel will correctly find `package.json` in the `frontend` folder and run the build command successfully.
