# Photo Editor

A simple and modern photo editor built with React that allows users to apply various filter effects to an image and download the edited image. The project supports common image adjustments like brightness, contrast, saturation, grayscale, sepia, hue rotation, and blur.

## Features

- **Brightness Adjustment**: Modify the brightness of the image.
- **Contrast Adjustment**: Adjust the contrast of the image.
- **Saturation Control**: Change the saturation level of the image.
- **Grayscale Effect**: Apply grayscale effect to the image.
- **Sepia Tone**: Add a sepia tone to the image.
- **Hue Rotation**: Rotate the hue of the image.
- **Blur Effect**: Add a blur effect to the image.
- **Image Download**: Download the edited image as a PNG file.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **JavaScript**: Programming language used for the logic of the application.
- **HTML5 & CSS3**: Used for structuring and styling the application.
- **Pixabay API**: For loading sample images with CORS support.

## Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/photo-editor.git
    cd photo-editor
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm start
    ```

    The application will run on `http://localhost:3000`.

## Usage

1. **Upload or Enter Image URL**: 
   - Use the input field in the navbar to enter the URL of the image you want to edit.
   - The image should be from a source that supports CORS.

2. **Apply Filters**: 
   - Use the sliders in the control panel to adjust brightness, contrast, saturation, grayscale, sepia, hue rotation, and blur.
   - The image will update in real-time as you move the sliders.

3. **Download the Image**: 
   - Click the "Download Edited Image" button to download the modified image as a PNG file.

## Troubleshooting

- **Tainted Canvas Error**: 
  - If you encounter a "tainted canvas" error when trying to download the image, make sure the image source supports CORS. Use images from sources like Pixabay, Unsplash, or your own server with appropriate CORS headers.
  - Ensure the image element includes the `crossOrigin="anonymous"` attribute.
