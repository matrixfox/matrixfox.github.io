---
layout: post
title: How to manually install ComfyUI
meta: ComfyUI is an advanced graphical user interface for Stable Diffusion, featuring a modular node interface that provides enhanced control over the image generation process. This allows users to fine-tune and customize their generated images with greater precision and flexibility.
posted: 2024-5-22
category: blog
---

ComfyUI is an advanced graphical user interface for Stable Diffusion. Featuring a modular node interface that provides enhanced control over the image generation process. This allows users to fine-tune and customize their generated images with greater precision and flexibility. 

One advantage of running your own local LLM there's no censorship. You have full control over the model and its outputs, allowing you to customize and modify it according to your specific needs and preferences. Let's get started!

## Prerequisites

Before you begin, ensure you have:
- Python 3.8 or later installed
- pip (Python package installer) installed
- Git installed

## Step 1: Clone the ComfyUI Repository

Open your terminal or command prompt and run the following command:

```bash
git clone https://github.com/comfyanonymous/ComfyUI.git
cd ComfyUI
```

## Step 2: Installing PyTorch with Nvidia CUDA

Install stable PyTorch with CUDA using this command:

```bash
pip install torch torchvision torchaudio --extra-index-url https://download.pytorch.org/whl/cu121
```

## Step 3: Install Dependencies

Install the required dependencies with the pip install command:

```bash
pip install -r requirements.txt
```

## Step 4: Download the Pre-trained Models

To use ComfyUI, you need to download pre-trained models. Head over to [Civitai](https://civitai.com/models) and select a checkpoint that interests you. There’s a wide variety of checkpoints available, each trained on different datasets. There’s no single best checkpoint, so feel free to experiment and find the one that suits your needs.

### Stable Diffusion Checkpoints

- SD1.5 (Stable Diffusion 1.5)
    - Earliest version of Stable Diffusion.
    - Images are cropped and trained on 512x512 pixels.
    - Well-tested and reliable for various applications.

- SDXL (Stable Diffusion XL)
    - Second more advanced version of Stable Diffusion.
    - Trained on larger images, usually 1024x1024 pixels.
    - Better choice for landscape photorealistic realism images.

- Pony Checkpoints
    - Specialized for generating Anime artwork.
    - Generally trained on standard sizes such as 512x512 pixels.
    - Trained on a dataset rich in pony art.

### Recommend Checkpoints

- SD1.5
    - [runwayml/stable-diffusion-v1-5](https://huggingface.co/runwayml/stable-diffusion-v1-5/blob/main/v1-5-pruned.safetensors)

- SDXL
    - [stabilityai/sdxl-turbo](https://huggingface.co/stabilityai/sdxl-turbo/blob/main/sd_xl_turbo_1.0_fp16.safetensors)
    - [stabilityai/stable-diffusion-xl-base-1.0](https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0/blob/main/sd_xl_base_1.0.safetensors)

- Pony
    - [T-ponynai3](https://civitai.com/models/317902?modelVersionId=469115)
    - [anima_pencil-XL](https://civitai.com/models/261336?modelVersionId=505691)

### Organizing Checkpoints

Place your Stable Diffusion checkpoints (the large `.ckpt or .safetensors` files) in the `ComfyUI/models/checkpoints` directory. Create the directory if it doesn't exist:

```bash
mkdir -p models/checkpoints
```

To keep your checkpoints organized, create subfolders inside the checkpoints directory. For example, you might want to separate the models for different versions, such as:

```markdown
ComfyUI/
└── models/
    └── checkpoints/
        ├── SD15/
        ├── SDXL/
        └── Pony/
```

## Step 5: Run ComfyUI

With everything set up, you can now run ComfyUI. Execute the following command:

```bash
python main.py --force-fp16 --use-pytorch-cross-attention --disable-smart-memory
```

## Extras

When ComfyUI generates an image, it embeds metadata within the `.png` file. This metadata includes the seed and keywords used during generation. You can drag and drop the `.png` file back into ComfyUI to automatically load the workflow with the original seed and keywords, allowing you to recreate or adjust the image generation process.

<div class="alert alert-primary" role="alert">
  Explore the list of demo workflows available for download on the <a href="https://comfyanonymous.github.io/ComfyUI_examples/">ComfyUI site</a> to get you started.
</div>

### Hires Fix

Hires fix should be the first example you should get to know. The "Hires fix" technique involves generating an image at a lower resolution, then upscaling it and processing it again using the img2img function. This technique will add even more detail to the generated image.

<div class="alert alert-primary" role="alert">
  Save the <a href="https://comfyanonymous.github.io/ComfyUI_examples/2_pass_txt2img/">Hires fix PNG file</a> and drag and drop it into your ComfyUI workflow.
</div>

![image](https://comfyanonymous.github.io/ComfyUI_examples/2_pass_txt2img/hiresfix_latent_workflow.png)

The Hires fix workflow includes Upscale Latent node and two KSamplers. After the first pass through the KSampler, an intermediate image is saved while the latent data is passed to the upscaler and the second KSampler. Finally, the upscaled high-resolution image is decoded and saved.
