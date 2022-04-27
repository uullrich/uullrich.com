<p align="center">
  <a href="https://uullrich.com">
    <img alt="logo" src="https://github.com/uullrich/uullrich.com/blob/master/src/images/icon.png?raw=true" width="60" />
  </a>
</p>

# [uullrich.com](https://uullrich.com)

## Introductoin
My personal site with a minimal blog system. Based on the Gatsby minimal TypeScript starter. I am not a designer. The design is kept very simple without any css framework.

## Development

1.  **Installation of dependencys.**
    To run the page locally you have to install the dependencys. I am using React 18 and due to the short time it was released most dependencys still checking for React < 18. As a workaround use the --legacy-peer-deps option.
    ```shell
    # Call with no strict peer dependecy check.
    npm install --legacy-peer-deps
    ```

2.  **Startup the development server.**
    My dev environment is in WSL and at first glance the hot reloading stucks. The solution was to add the following options to <em>gatsby develop</em>: --host localhost --port 8000
    These options are set in the npm script development.
    ```shell
    npm run development
    //or just
    gatsby develop
    ```

## Hosting
[uullrich.com](https://uullrich.com) is hosted with AWS and based on a serverless architecture.
