# IDEA9103-Major-Project
## Functioning prototype
### Instructions on how to interact with the work
- Interaction 1:
  - Press "Move Cars" button below the screen to move the cars;
  - Press again to stop the cars.
- Interaction 2:
  - Press " "(space) on key board to change the red and blue lights.
- Interaction 3:
  - Press "1" on key board to see the night view of the street with falliing snows.
### Details of individual approach to animating the group code
- The animation method I chosed to drive this individual code:
  - User Input: Incorporate mouse or keyboard inputs for animation.
- Which properties of the image will be animated and how：

  1.**Background Color Change**:
  When the '1' key is pressed, the background color of the canvas changes from a light color to a deep blue, simulating a transition from day to night.

  2.**Snowflake Animation**:
  Upon pressing the '1' key, snowflakes begin to fall from the top of the canvas to the bottom. This animation involves the creation and continuous movement of multiple small white circles representing snowflakes.

  3.**Car Movement**:
  When the "Move Cars" button is pressed, the cars (represented by rectangles) move vertically across the canvas. This creates a dynamic scene where cars continuously loop from the bottom to the top once they reach the end of the canvas.

  4.**Light Color Swap**:
  Pressing the spacebar swaps the colors of the lights (red and blue rectangles) on the canvas. This toggling effect is repeated every time the spacebar is pressed, adding a layer of interactivity and visual variation.



- References to inspiration for animating your individual code:
  - Figure 1: the snowy driveway at night
  ![An image of the snowy driveway at night](images/image1.jpeg)
  reference:https://images.app.goo.gl/ZcgoNB7HhWhfRoXY8

  - Figure 2: the night scene with red and blue lights
  ![An image of the night scene with red and blue lights ](images/image2.jpeg)
  reference:https://images.app.goo.gl/K3bc8qrzDnstngQR9

 #### Uniqueness from Other Group Members' Work :
- Background and Snowflake Interaction:
The background color change and the introduction of falling snowflakes upon pressing the '1' key are unique to this part of the project. This simulates weather changes and enhances the atmospheric dynamics, differentiating it from the other members' work that focuses on perlin noise and randomness for city transitions.

- Car Movement:
The vertical movement of cars on the canvas provides a visual representation of traffic flow and urban activity, adding a dynamic and realistic element to the scene. This continuous motion contrasts with the randomness and perlin noise animations used by another member, offering a different type of animated interaction.

- Interactive Light Color Swap:
The ability to swap light colors with the spacebar introduces an element of user control and interaction, making the scene more engaging. This specific color change mechanism adds a distinct visual variation that is not present in the other animations focused on randomness and perlin noise.

#### Integration with Other Group Members' Work:
- Perlin Noise and Randomness:

  - One group member uses perlin noise and randomness to animate points moving from bottom to top, transforming the image into randomly sized colored points to represent the city's transition from morning to evening. This approach emphasizes the natural and organic flow of the city, distinct from the more structured animations of cars and lights in this part.

- Audio-Driven Animation:

  - Another group member incorporates audio technology to create a music player effect. In their work, cars move to the rhythm, lights become breathing lights changing colors with the rhythm, and clicking on the lights adds drum beats to jazz music. This adds a musical and rhythmic dimension to the project, providing a sensory experience that complements the visual animations.

### Reference of Codes

1.[move](https://p5js.org/reference/#/p5.Camera/move)

2.[swapColor（）](https://chatgpt.com)provided by ChatGPT

3.[button](https://p5js.org/reference/#/p5/createButton)

4.[update()](https://gamedev.stackexchange.com/questions/102534/how-to-create-a-update-function-in-java)
