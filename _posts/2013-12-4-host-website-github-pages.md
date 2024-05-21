---
layout: post
title: How to Host a Webpage on GitHub Pages
meta: Hosting with GitHub Pages is as easy as cake, and that's no lie! This guide will show you how setting up is a cinch.
posted: 04-12-2013
category: blog
---

# How to Create a GitHub Page

Creating a GitHub Page is straightforward and there are two main ways to do it. Whether you want to create a main page for your GitHub username or a page for an existing repository, here’s a step-by-step guide.

## Creating a Main GitHub Page

1. **Create a New Repository**: Make a repository named `<your-github-username>.github.io` (replace `<your-github-username>` with your actual GitHub username) and click "Create repository".
2. **Configure the Repository**: After creating the repository, go to "Settings".
3. **Automatic Page Generator**: Scroll down to the "GitHub Pages" section and click "Choose a theme".
4. **Edit and Publish**: Customize the generated page and add your content. You can also add a Google Analytics ID. Once ready, select a theme and click "Publish".
5. **Access Your Site**: Your site will be hosted at `http://<your-github-username>.github.io`.

## Creating a GitHub Page for an Existing Repository

1. **Select Your Repository**: Navigate to the repository you want to create a page for.
2. **Upload Your HTML/CSS**: Ensure your HTML and CSS files are uploaded to the repository.
3. **Create a gh-pages Branch**: Click the branch dropdown menu, type `gh-pages`, and create the branch.
4. **Access Your Site**: Your site will be hosted at `http://<your-github-username>.github.io/<repository-name>`. It might take a few minutes for the site to be available.

## Metadata Feature

ComfyUI stores metadata inside the `.png` files it generates. This metadata includes the keywords and seed number used to generate the image. You can drag and drop these images into the ComfyUI workflow to load and view the metadata, allowing you to recreate or tweak the original generation settings.

## Tips and Troubleshooting

- **Propagation Time**: It might take up to 10 minutes for your site to be fully propagated.
- **Documentation**: If you encounter any issues, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages).

## Conclusion

Setting up GitHub Pages is a great way to host web pages directly from your GitHub repositories. Follow these steps to get started and showcase your projects with ease. Happy coding!