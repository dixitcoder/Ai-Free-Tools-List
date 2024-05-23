<template>


  <v-card>
    <v-layout>
      <v-toolbar-title>My files</v-toolbar-title>

      <v-spacer></v-spacer>

      <!-- <v-btn icon="mdi-dots-vertical" variant="text">click</v-btn> -->

      <v-speed-dial location="bottom center" transition="slide-y-reverse-transition">
        <v-btn
          v-for="action in speedDialActions"
          :key="action.key"
          :icon="action.icon"
        ></v-btn>
      </v-speed-dial>

      <v-main style="height: 350pc">
        <div class="main-container">
          <div class="blur-circle1"></div>
          <div class="blur-circle2"></div>
          <!-- Start Landing Page -->
          <div class="landing-page">
            <header>
              <div class="container">
                <a href="#" class="logo">Dixit <b>Coder</b></a>
                <ul class="links" icon>
                  <v-btn
                    icon="mdi-menu"
                    color="primary"
                    @click.stop="sheet = !sheet"
                  ></v-btn>
                </ul>
                <!-- <ul v-for="item in items" :key="item" class="links">

              <v-btn icon :href="item.link">
    <v-icon>{{ item["prepend-icon"] }}</v-icon>
  </v-btn>
            </ul> -->
              </div>
            </header>
            <div class="content">


              <div class="container">

                <div class="info">
                  <h1>AI Technologies Tools : 283
</h1>
                  <span>
                    The statement "AI technologies are reshaping industries like healthcare, finance, and transportation" reflects the widespread impact of AI across various sectors. As for "256 ai link provide free," it seems like you're looking for a source or directory of AI-related resources. Here's a suggestion for finding free AI resources:
                  </span><br><br>
                  <v-btn to="/AiToolsList" icon="mdi-robot" color="primary"></v-btn>
                </div>
                <div class="image">
                  <img
                    class="main-image"
                    src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-working-using-vr-tech-3840669-3202986.png?f=webp"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- End Landing Page -->
        </div>


<!-- footer ending -->
        <section class="about-me" id="about-me">

  <div class="container">

    <div class="about-me-container">

      <div class="about-me-title">

        About <br>  Dixit Patel
      </div>

      <div class="about-me-flex-container">


        <div class="about-me-image">
          <div class="back-div"></div>
          <div class="black-image"><img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/main/images/black.jpg" alt="black"></div>
          <div class="main-image"><img height="300" src="https://firebasestorage.googleapis.com/v0/b/dixitcoder-tools-ai.appspot.com/o/432381600_957304799301578_1886847705414183493_n.webp?alt=media&token=8b5a66a8-3f87-48bf-8824-942e7360ac0f" alt="smit"></div>
        </div>
        <div class="about-me-content">


          <div class="logo"><img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/logo.svg" alt="smit"></div>

          <!-- <div class="text">

            An ambitious Front-end Developer and designer who takes great pride in the presentation and quality of work.

            <br><br>

            Smit is someone who can design and create simple, beautiful and easy to understand things. He is an expert at taking designs into original, exciting and new directions.
          </div> -->
        </div>
      </div>

      <div class="mail-button mail-button2">

        <a href="mailto:dixitcoder@gmail.com"><img src="https://raw.githubusercontent.com/Smit-Prajapati/prajapatismit/20391be8bf1ed24ef0e5da066bf68a5f6ee78fa1/images/mail.svg" alt="mail"></a>
      </div>

    </div>

  </div>
  <!-- About 1 - Bootstrap Brain Component -->
<!-- page new  -->
<br><br>
<v-divider></v-divider>
<br><br>
<section class="grid-50 scrolling-story-grid">

    <!-- Responsive Logo Container  -->

  <!-- One Human Family SVG Logo -->

  <figure>
  <div class="section-logo">
    <svg class="onehumanfamily-logo-svg rotate" id="header_logo_svg" viewBox="0 0 504 504">
      <path class="rb-red" d="M252,26.9c-5.4,0.1-10.4-3-12.5-8c-2.2-5-1.1-10.7,2.6-14.6c3.8-3.9,9.5-5.1,14.5-3.1c5,2,8.3,6.9,8.4,12.3
	C265.1,20.8,259.3,26.8,252,26.9L252,26.9z" />
      <path class="rb-red" d="M266.9,50.8l32.8-48.6L294.4,0l-31,32.1h-22.9L209.5,0l-5.3,2.2l32.8,48.6l-0.2,33l-9.6,80.1h9L252,97.3
	l15.7,66.6h9l-9.6-80.1L266.9,50.8z" />
      <path class="rb-turquoise" d="M252.3,477.2c5.4,0,10.3,3.2,12.4,8.2c2.1,5,0.9,10.7-2.9,14.6c-3.8,3.8-9.6,5-14.6,2.9c-5-2.1-8.2-7-8.2-12.4
	C239,483.1,245,477.2,252.3,477.2L252.3,477.2z" />
      <path class="rb-turquoise" d="M237.1,453.1l-32.8,48.6l5.3,2.3l31-32.1h22.9l31,32.1l5.3-2.3l-32.8-48.6l0.2-33l9.6-80.1h-9L252,406.6
	L236.3,340h-9l9.6,80.1L237.1,453.1z" />
      <path class="rb-pink" d="M92.6,93c-3.8,3.8-9.5,5-14.5,2.9c-5-2.1-8.2-6.9-8.2-12.3c0-5.4,3.2-10.3,8.2-12.3c5-2.1,10.7-0.9,14.5,2.9
	C97.8,79.3,97.8,87.8,92.6,93L92.6,93z" />
      <path class="rb-pink" d="M120.3,99.2l-11.2-57.6l-5.3,2.1l0.8,44.7l-8.1,8.1h-0.1l-8,8.1l-44.7-0.7l-2.1,5.3l57.6,11.1l23.1,23.5
	l49.8,63.5l6.4-6.4l-36-58.2l58.2,36l6.4-6.4l-63.5-49.9L120.3,99.2z" />
      <path class="rb-green" d="M411.4,411c3.8-3.8,9.5-5,14.5-2.9c5,2.1,8.2,6.9,8.2,12.3s-3.2,10.3-8.2,12.3c-5,2.1-10.7,0.9-14.5-2.9
	C406.2,424.6,406.2,416.2,411.4,411L411.4,411z" />
      <path class="rb-green" d="M383.7,404.7l11.2,57.6l5.3-2.1l-0.8-44.7l16.1-16.1l44.7,0.7l2.1-5.3l-57.6-11.1l-23.1-23.5l-49.8-63.5
	l-6.4,6.4l36,58.2l-58.3-36l-6.4,6.4l63.5,49.9L383.7,404.7z" />
      <path class="rb-purple" d="M26.8,252.3c0,5.4-3.2,10.2-8.2,12.3c-5,2.1-10.7,0.9-14.5-2.9c-3.8-3.8-4.9-9.5-2.9-14.5
	c2.1-5,6.9-8.2,12.3-8.2c3.5,0,6.9,1.4,9.4,3.9C25.4,245.3,26.8,248.7,26.8,252.3L26.8,252.3z" />
      <path class="rb-purple" d="M50.9,237.1L2.3,204.2L0,209.5l32.1,31.1v22.8L0,294.5l2.3,5.3l48.6-32.8l32.9,0.2l80.2,9.6v-9L97.4,252
	l66.6-15.7v-9.1l-80.2,9.6L50.9,237.1z" />
      <path class="rb-yellow" d="M477.2,251.7c0-5.4,3.3-10.3,8.2-12.3c5-2.1,10.7-0.9,14.5,2.9c3.8,3.8,4.9,9.6,2.9,14.5c-2.1,5-7,8.2-12.4,8.2
	c-3.5,0-6.9-1.4-9.4-3.9C478.6,258.6,477.2,255.2,477.2,251.7L477.2,251.7z" />
      <path class="rb-yellow" d="M453.1,266.9l48.6,32.8l2.3-5.3l-32.1-31.1v-22.8l32.1-31.1l-2.3-5.3l-48.6,32.9l-32.9-0.3l-80.2-9.6v9.1
	l66.6,15.7L340,267.7v9l80.2-9.6L453.1,266.9z" />
      <path class="rb-blue" d="M93,411.4c3.8,3.8,5,9.5,2.9,14.5c-2.1,5-6.9,8.2-12.3,8.2S73.3,431,71.2,426c-2.1-5-0.9-10.7,2.9-14.5
	c2.5-2.5,5.9-3.9,9.4-3.9S90.5,408.9,93,411.4L93,411.4z" />
      <path class="rb-blue" d="M99.2,383.7l-57.6,11.1l2.1,5.3l44.7-0.7l8,8.1h0.1l8.1,8.1l-0.8,44.7l5.3,2.1l11.2-57.6l23.5-23.1l63.5-49.9
	l-6.4-6.4l-58.3,36l36-58.2l-6.4-6.4l-49.8,63.5L99.2,383.7z" />
      <path class="rb-orange" d="M411,92.5c-5.2-5.2-5.2-13.6,0-18.8c5.2-5.2,13.6-5.2,18.8,0c5.2,5.2,5.2,13.6,0,18.8
	C424.6,97.7,416.2,97.7,411,92.5L411,92.5z" />
      <path class="rb-orange" d="M404.7,120.3l57.6-11.1l-2.1-5.3l-44.7,0.7l-8.1-8.1l-8.1-8.1l0.8-44.7l-5.3-2.1l-11.2,57.6l-23.5,23.1
	l-63.5,49.9l6.4,6.4l58.3-36l-36,58.2l6.4,6.4l49.8-63.5L404.7,120.3z" />
    </svg>

    <svg style="display:none" class="OneHumanFamily-logo-title" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 234.59 35.1">
      <defs>
      </defs>
      <path class="cls-1" d="m11.72,8.01v8.07c0,4.43-2.62,8.01-5.86,8.01S0,20.51,0,16.09v-8.07C0,3.59,2.62,0,5.86,0c3.23,0,5.86,3.59,5.86,8.01Zm-3.05,0c0-2.12-1.26-3.85-2.81-3.85s-2.81,1.72-2.81,3.85v8.07c0,2.12,1.26,3.85,2.81,3.85s2.81-1.72,2.81-3.85v-8.07Z" />
      <path class="cls-1" d="m24.48,15.63v8.51h-3.05v-8.51c0-1.38-.82-2.49-1.82-2.49s-1.82,1.12-1.82,2.49v8.51h-3.05v-15.17h3.05v.48c.58-.32,1.2-.49,1.82-.48,2.69,0,4.87,2.98,4.87,6.66Z" />
      <path class="cls-1" d="m35.68,18.55l1.97,3.17c-1.45,1.69-2.78,2.41-4.43,2.41-1.76.03-3.43-1.04-4.53-2.91h0c-.21-.36-.4-.75-.55-1.16h0c-.21-.57-.37-1.15-.47-1.76v-.04c-.6-3.53.71-7.14,3.12-8.62,2.41-1.48,5.26-.43,6.79,2.52h0c.04.08.08.16.12.24.02.05.05.1.07.15.05.11.09.22.14.33.02.04.04.09.05.13.06.14.11.29.16.44h0s0,.02,0,.02v.02s0,0,0,0v.03s.01,0,.01,0v.03s0,0,0,0v.03s.61,1.94.61,1.94l-3.07,1.74-.42.24-3.39,1.91c.39.32.83.48,1.28.46.91,0,1.62-.29,2.52-1.34Zm-4.97-2.51l.11-.06,1.81-1.02,1.88-1.06s-.03-.04-.05-.06c-.42-.45-.94-.69-1.48-.69-.3,0-.59.08-.87.25-.78.47-1.32,1.48-1.41,2.64h0Z" />
      <path class="cls-1" d="m53.27.06v24.07h-3.05v-9.95h-5.63v9.98h-3.05V.06h3.05v9.95h5.63V.06h3.05Z" />
      <path class="cls-1" d="m66.28,8.96v15.17h-3.05v-.48c-1.5.83-3.21.58-4.55-.65-1.34-1.24-2.15-3.31-2.15-5.52v-8.51h3.05v8.51c0,1.38.82,2.5,1.82,2.5s1.82-1.12,1.82-2.5v-8.51h3.05Z" />
      <path class="cls-1" d="m86,15.63v8.51h-3.05v-8.51c0-1.38-.82-2.49-1.82-2.49s-1.82,1.12-1.82,2.49v8.51h-3.05v-8.51c0-1.38-.82-2.49-1.82-2.49s-1.82,1.12-1.82,2.49v8.51h-3.05v-15.16h3.05v.47c1.77-.98,3.79-.45,5.17,1.34.9-1.17,2.1-1.83,3.35-1.83,2.69,0,4.87,2.98,4.87,6.66Z" />
      <path class="cls-1" d="m100.11,8.98v15.16h-3.05v-.81c-2.33,1.61-5.17.77-6.81-2s-1.64-6.75,0-9.53,4.48-3.61,6.81-2v-.81h3.05Zm-5.54,11c1.38,0,2.5-1.53,2.5-3.42,0-1.89-1.12-3.41-2.5-3.41s-2.5,1.53-2.5,3.41,1.12,3.42,2.5,3.42h0Z" />
      <path class="cls-1" d="m113.12,15.63v8.51h-3.05v-8.51c0-1.38-.82-2.49-1.82-2.49s-1.82,1.12-1.82,2.49v8.51h-3.05v-15.17h3.05v.48c.58-.32,1.2-.49,1.82-.48,2.69,0,4.87,2.98,4.87,6.66Z" />
      <path class="cls-1" d="m119.72,5.65c-.38.9-.38,2.01,0,2.92s1.09,1.45,1.85,1.44h5.63v4.17h-5.63c-.73,0-1.45-.21-2.12-.62v10.59h-3.05V7.1c0-3.9,2.32-7.06,5.17-7.07h5.63v4.17h-5.63c-.76,0-1.47.54-1.85,1.44Z" />
      <path class="cls-1" d="m140.7,8.98v15.16h-3.05v-.81c-2.33,1.61-5.17.77-6.81-2s-1.64-6.75,0-9.53,4.48-3.61,6.81-2v-.81h3.05Zm-5.54,11c1.38,0,2.5-1.53,2.5-3.42,0-1.89-1.12-3.41-2.5-3.41s-2.5,1.53-2.5,3.41,1.12,3.42,2.5,3.42h0Z" />
      <path class="cls-1" d="m160.41,15.63v8.51h-3.05v-8.51c0-1.38-.82-2.49-1.82-2.49s-1.82,1.12-1.82,2.49v8.51h-3.05v-8.51c0-1.38-.82-2.49-1.82-2.49s-1.82,1.12-1.82,2.49v8.51h-3.05v-15.16h3.05v.47c1.77-.98,3.79-.45,5.17,1.34.9-1.17,2.1-1.83,3.35-1.83,2.69,0,4.87,2.98,4.87,6.66Z" />
      <path class="cls-1" d="m163.68,4.5V.1h3.05v4.4h-3.05Zm0,19.64v-15.14h3.05v15.14h-3.05Z" />
      <path class="cls-1" d="m170,24.16V.06h3.05v24.1h-3.05Z" />
      <path class="cls-1" d="m186.07,8.96v18.58c0,3.68-2.18,6.66-4.87,6.66s-4.87-2.98-4.87-6.66h3.05c0,1.38.82,2.5,1.82,2.5s1.82-1.12,1.82-2.5v-3.89c-1.5.83-3.21.58-4.55-.65-1.34-1.24-2.15-3.31-2.15-5.52v-8.51h3.05v8.51c0,1.38.82,2.5,1.82,2.5s1.82-1.12,1.82-2.5v-8.51h3.05Z" />
      <path class="cls-1" d="m189.35,24.14v-4.26h3.05v4.26h-3.05Z" />
      <path class="cls-1" d="m207.97,8.97v4.17h-1.46v3.41c0,2.01-.58,3.94-1.62,5.36-1.04,1.42-2.45,2.22-3.92,2.22h-2.02c-.26,0-.48.29-.48.66s.21.66.48.66h4.03c1.95,0,3.53,2.16,3.53,4.82s-1.58,4.82-3.53,4.82h-3.54v-4.17h3.54c.26,0,.48-.29.48-.66s-.21-.66-.48-.66h-4.03c-1.46,0-2.77-1.23-3.29-3.1-.52-1.87-.15-3.98.94-5.31-1.69-2.97-1.53-7.19.37-9.9,1.91-2.72,4.98-3.11,7.22-.92.05-.08.1-.15.15-.22.56-.77,1.32-1.2,2.11-1.19h1.52Zm-7,4.17c-1.38,0-2.5,1.53-2.5,3.41,0,1.38.61,2.63,1.54,3.15.93.53,2.01.24,2.72-.74s.93-2.45.54-3.72c-.39-1.28-1.3-2.11-2.31-2.11h0Z" />
      <path class="cls-1" d="m221.58,8.98v15.16h-3.05v-.81c-2.33,1.61-5.17.77-6.81-2s-1.64-6.75,0-9.53,4.48-3.61,6.81-2v-.81h3.05Zm-5.54,11c1.38,0,2.5-1.53,2.5-3.42,0-1.89-1.12-3.41-2.5-3.41s-2.5,1.53-2.5,3.41,1.12,3.42,2.5,3.42h0Z" />
      <path class="cls-1" d="m234.59,8.96v18.58c0,3.68-2.18,6.66-4.87,6.66s-4.87-2.98-4.87-6.66h3.05c0,1.38.82,2.5,1.82,2.5s1.82-1.12,1.82-2.5v-3.89c-1.5.83-3.21.58-4.55-.65-1.34-1.24-2.15-3.31-2.15-5.52v-8.51h3.05v8.51c0,1.38.82,2.5,1.82,2.5s1.82-1.12,1.82-2.5v-8.51h3.05Z" />
    </svg>
  </div>

</figure>
 <article>
   <div>

           <h2>Dixi Patel</h2>
          <h3>All Around The AI 283 Free Tool Link Provide</h3>

            <span style="color:white" class="has-dropcap">



Artificial Intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think, learn, and solve problems like humans. It encompasses a wide range of technologies and applications that aim to replicate or augment human intelligence. Here are some key aspects and applications of AI:

Machine Learning (ML): ML is a subset of AI that focuses on developing algorithms and statistical models that enable computers to learn and improve from experience without being explicitly programmed. It includes techniques like supervised learning, unsupervised learning, and reinforcement learning.
Natural Language Processing (NLP): NLP deals with the interaction between computers and human languages. It enables machines to understand, interpret, and generate human language, facilitating applications like chatbots, sentiment analysis, and language translation.
Computer Vision: Computer vision involves teaching computers to interpret and analyze visual information from the environment. It enables tasks like object recognition, image classification, facial recognition, and autonomous driving.
Robotics: AI plays a crucial role in robotics by enabling robots to perceive the environment, make decisions, and perform tasks autonomously. Applications include industrial automation, medical robots, and service robots.
Deep Learning: Deep learning is a subset of ML that uses artificial neural networks with multiple layers to extract complex patterns from data. It has revolutionized areas such as image recognition, speech recognition, and natural language understanding.
AI in Healthcare: AI is transforming healthcare with applications like medical image analysis, disease diagnosis, personalized treatment plans, and drug discovery.
AI in Finance: In finance, AI is used for algorithmic trading, fraud detection, credit scoring, risk assessment, and customer service automation.
AI in Smart Assistants: Smart assistants like Siri, Google Assistant, and Alexa use AI technologies such as NLP and ML to understand user queries, provide information, and perform tasks.
Ethical and Social Implications: The rapid advancement of AI raises ethical and social questions regarding privacy, bias in algorithms, job displacement, autonomous weapons, and the impact on society.
AI is a dynamic and rapidly evolving field with diverse applications across industries, driving innovation and transforming how we work, live, and interact with technology.
               </span>
              <!-- Remaining paragraphs -->
            </div>
   </article>

  </section><br>
  <v-divider></v-divider>
<br><br>

    <div class="hacker">

<!-- Example  -->
<h1>Gallery</h1>
<div class="wrapper">
  <article>
    <div class="backdrop"></div>
    <button>
      <span>View more</span>
    </button>
    <img src="https://images.pexels.com/photos/6144346/pexels-photo-6144346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
  </article>
  <article>
    <div class="backdrop"></div>
    <button>
      <span>View more</span>
    </button>
    <img src="https://images.pexels.com/photos/17221327/pexels-photo-17221327/free-photo-of-blanco-y-negro-moda-hombre-traje.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
  </article>
  <article>
    <div class="backdrop"></div>
    <button>
      <span>View more</span>
    </button>
    <img src="https://images.pexels.com/photos/19557234/pexels-photo-19557234.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
  </article>
  <article>
    <div class="backdrop"></div>
    <button>
      <span>View more</span>
    </button>
    <img src="https://images.pexels.com/photos/15430700/pexels-photo-15430700/free-photo-of-hombre-pareja-amor-gente.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
  </article>
  <article>
    <div class="backdrop"></div>
    <button>
      <span>View more</span>
    </button>
    <img src="https://images.pexels.com/photos/18467504/pexels-photo-18467504/free-photo-of-procesado-con-vsco-con-fn16-preestablecido.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
  </article>
</div>
</div>
<div class="collect"></div>
<br><br><br>
<v-divider></v-divider>
<div class="gallery">
  <div class="card">
  <img src="https://img.freepik.com/free-photo/view-brightly-colored-frog-nature_23-2150453188.jpg?t=st=1691128330~exp=1691131930~hmac=10a3a28429a4d384749a210b3aa1bed6fdc8c970715364865872d73a30b9878b&w=740" alt="">
  <div class="description">
    <h1>Rana</h1>
    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex hic corporis animi harum? Nisi quis ipsum laborum a animi perspiciatis assumenda quae deserunt porro, soluta voluptatum molestiae. Eveniet, aliquam! Mollitia? </p>
  </div>
  </div>
  <div class="card">
  <img src="https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg?w=740&t=st=1691128835~exp=1691129435~hmac=cf4add8cc138b51f673199bef484a8b6e73e2a38bb2c66f19b0520fbd4231875" alt="">
  <div class="description">
    <h1>Guacamaya</h1>
    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex hic corporis animi harum? Nisi quis ipsum laborum a animi perspiciatis assumenda quae deserunt porro, soluta voluptatum molestiae. Eveniet, aliquam! Mollitia? </p>
  </div>
  </div>

  <div class="card">
  <img src="https://img.freepik.com/free-photo/cute-chameleon-plant_23-2148949385.jpg?w=740&t=st=1691128794~exp=1691129394~hmac=0cfb7bc50fd1ff0983e2525c90cd2a3fbffd916aa374ae063d95232dcd2c4b35" alt="">
  <div class="description">
    <h1>Camaleon</h1>
    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex hic corporis animi harum? Nisi quis ipsum laborum a animi perspiciatis assumenda quae deserunt porro, soluta voluptatum molestiae. Eveniet, aliquam! Mollitia? </p>
  </div>
  </div>
</div>



<footer>

  <span style="color:white;font-style:bold;font-size:x-large">Instagram: <spna style="color:darkgreen">Dixitcoder</spna></span>
  <span>

    Find me across various platforms, and if you appreciate my work, share it
    with love within the community. It's all sent with heartfelt regards to
    everyone
  </span>
  <div class="footer-social">
    <a href="https://www.linkedin.com/in/frankuxui/" class="footer-link" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <circle cx="4.983" cy="5.009" r="2.188" fill="currentColor"></circle>
        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" fill="currentColor"></path>
      </svg></a><a href="https://www.figma.com/@frankuxui" class="footer-link" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.332 8.668a3.333 3.333 0 0 0 0-6.663H8.668a3.333 3.333 0 0 0 0 6.663 3.333 3.333 0 0 0 0 6.665 3.333 3.333 0 0 0 0 6.664A3.334 3.334 0 0 0 12 18.664V8.668h3.332z" fill="currentColor"></path>
        <circle cx="15.332" cy="12" r="3.332" fill="currentColor"></circle>
      </svg></a><a href="https://dribbble.com/frankuxui" class="footer-link" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.66 6.98a9.932 9.932 0 0 0-3.641-3.64C15.486 2.447 13.813 2 12 2s-3.486.447-5.02 1.34c-1.533.893-2.747 2.107-3.64 3.64S2 10.187 2 12s.446 3.487 1.34 5.02a9.924 9.924 0 0 0 3.641 3.64C8.514 21.553 10.187 22 12 22s3.486-.447 5.02-1.34a9.932 9.932 0 0 0 3.641-3.64C21.554 15.487 22 13.813 22 12s-.446-3.487-1.34-5.02zM12 3.66c2 0 3.772.64 5.32 1.919-.92 1.174-2.286 2.14-4.1 2.9-1.002-1.813-2.088-3.327-3.261-4.54A7.715 7.715 0 0 1 12 3.66zM5.51 6.8a8.116 8.116 0 0 1 2.711-2.22c1.212 1.201 2.325 2.7 3.34 4.5-2 .6-4.114.9-6.341.9-.573 0-1.006-.013-1.3-.04A8.549 8.549 0 0 1 5.51 6.8zM3.66 12c0-.054.003-.12.01-.2.007-.08.01-.146.01-.2.254.014.641.02 1.161.02 2.666 0 5.146-.367 7.439-1.1.187.373.381.793.58 1.26-1.32.293-2.674 1.006-4.061 2.14S6.4 16.247 5.76 17.5c-1.4-1.587-2.1-3.42-2.1-5.5zM12 20.34c-1.894 0-3.594-.587-5.101-1.759.601-1.187 1.524-2.322 2.771-3.401 1.246-1.08 2.483-1.753 3.71-2.02a29.441 29.441 0 0 1 1.56 6.62 8.166 8.166 0 0 1-2.94.56zm7.08-3.96a8.351 8.351 0 0 1-2.58 2.621c-.24-2.08-.7-4.107-1.379-6.081.932-.066 1.765-.1 2.5-.1.799 0 1.686.034 2.659.1a8.098 8.098 0 0 1-1.2 3.46zm-1.24-5c-1.16 0-2.233.047-3.22.14a27.053 27.053 0 0 0-.68-1.62c2.066-.906 3.532-2.006 4.399-3.3 1.2 1.414 1.854 3.027 1.96 4.84-.812-.04-1.632-.06-2.459-.06z" fill="currentColor"></path>
      </svg></a><a href="https://codesandbox.io/u/frankuxui" class="footer-link" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 6l10.455-6L22.91 6 23 17.95 12.455 24 2 18V6zm2.088 2.481v4.757l3.345 1.86v3.516l3.972 2.296v-8.272L4.088 8.481zm16.739 0l-7.317 4.157v8.272l3.972-2.296V15.1l3.345-1.861V8.48zM5.134 6.601l7.303 4.144 7.32-4.18-3.871-2.197-3.41 1.945-3.43-1.968L5.133 6.6z" fill="currentColor"></path>
      </svg></a><a href="https://codepen.io/frankuxui" class="footer-link" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.838 8.445c0-.001-.001-.001 0 0l-.003-.004-.001-.001v-.001a.809.809 0 0 0-.235-.228l-9.164-6.08a.834.834 0 0 0-.898 0L2.371 8.214A.786.786 0 0 0 2 8.897v6.16a.789.789 0 0 0 .131.448v.001l.002.002.01.015v.002h.001l.001.001.001.001c.063.088.14.16.226.215l9.165 6.082a.787.787 0 0 0 .448.139.784.784 0 0 0 .45-.139l9.165-6.082a.794.794 0 0 0 .371-.685v-6.16a.793.793 0 0 0-.133-.452zm-9.057-4.172 6.953 4.613-3.183 2.112-3.771-2.536V4.273zm-1.592 0v4.189l-3.771 2.536-3.181-2.111 6.952-4.614zm-7.595 6.098 2.395 1.59-2.395 1.611v-3.201zm7.595 9.311-6.96-4.617 3.195-2.15 3.765 2.498v4.269zm.795-5.653-3.128-2.078 3.128-2.105 3.131 2.105-3.131 2.078zm.797 5.653v-4.27l3.766-2.498 3.193 2.15-6.959 4.618zm7.597-6.11-2.396-1.611 2.396-1.59v3.201z" fill="currentColor"></path>
      </svg></a><a href="https://tailwindcomponents.com/u/frankuxui" class="footer-link" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" fill="currentColor"></path>
      </svg></a><a href="https://github.com/frankuxui" class="footer-link" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" fill="currentColor"></path>
      </svg></a><a href="https://www.instagram.com/frankuxui/" class="footer-link" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" fill="currentColor"></path>
      </svg></a><a href="https://dev.to/frankuxui" class="footer-link" target="_blank" rel="noopener noreferrer"><svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.73 11.93C7.73 13.65 7.71 13.76 7.5 14C7.31 14.17 7.12 14.23 6.74 14.23L6.23 14.24L6.2 11.97L6.18 9.7H6.7C7.05 9.7 7.3 9.77 7.47 9.91C7.71 10.12 7.73 10.16 7.73 11.93M22 7.5V16.5C22 17.61 21.11 18.5 20 18.5H4C2.89 18.5 2 17.61 2 16.5V7.5C2 6.39 2.89 5.5 4 5.5H20C21.11 5.5 22 6.39 22 7.5M8.93 11.73C8.9 9.89 8.88 9.74 8.64 9.34C8.24 8.66 7.79 8.5 6.28 8.5H5V15.5H6.21C7.54 15.5 8.1 15.33 8.5 14.79C8.91 14.26 9 13.81 8.93 11.73M13.12 8.5H11.64C10.15 8.5 10.14 8.5 9.93 8.78S9.7 9.21 9.7 12V14.96L9.97 15.23C10.22 15.5 10.28 15.5 11.68 15.5H13.12V14.31L12.03 14.27L10.93 14.24V12.6L11.61 12.57L12.27 12.53V11.34H10.88V9.7H13.12V8.5M19 8.56C19 8.5 18.7 8.5 18.34 8.5L17.66 8.56L17.07 10.91C16.69 12.39 16.45 13.18 16.4 13.04C16.32 12.77 15.26 8.6 15.26 8.55C15.26 8.5 14.95 8.5 14.58 8.5H13.89L14.3 10.05C14.5 10.92 14.89 12.33 15.11 13.2C15.45 14.55 15.57 14.85 15.86 15.14C16.06 15.36 16.31 15.5 16.47 15.5C16.8 15.5 17.23 15.16 17.37 14.77C17.5 14.5 19 8.69 19 8.56Z" fill="currentColor"></path>
      </svg></a>
  </div>


</footer>

</section>


        <v-bottom-sheet v-model="sheet">
          <template v-slot:activator="{ props }">
            <div class="text-center"></div>
          </template>

          <v-list>
            <v-list-subheader>Open in PDF</v-list-subheader>
            <v-divider></v-divider>

            <v-list-item
              v-for="item in items"
             class="new"
              :key="item.title"
              :prepend-icon="item['prepend-icon']"
              :title="item.title"
              :value="item.value"
              :to="item.link"
            ></v-list-item>
          </v-list>
        </v-bottom-sheet>
      </v-main>

    </v-layout>
  </v-card>
</template>
<script>
import { onMounted } from "vue";
import { Application } from "@splinetool/runtime";
import Cookies from "js-cookie";

export default {
  mounted() {
    onMounted(() => {
      const canvas = document.getElementById("canvas3d");
      const app = new Application(canvas);
      app.load("https://prod.spline.design/astVgoZPfHtry8Um/scene.splinecode");
    });
  },
  computed: {
    colorClass() {
      // Calculate the color class based on the selected color
      return {
        primary: this.selectedColor === "#3f51b5",
        error: this.selectedColor === "#f44336",
        warning: this.selectedColor === "#ff9800",
        success: this.selectedColor === "#4caf50",
      };
    },
  },
  methods: {
    saveColorToCookie() {
      Cookies.set("selectedColor", this.selectedColor);
    },
  },

  data: () => ({
    sheet: false,
    tiles: [
      { img: "keep.png", title: "Keep" },
      { img: "inbox.png", title: "Inbox" },
      { img: "hangouts.png", title: "Hangouts" },
      { img: "messenger.png", title: "Messenger" },
      { img: "google.png", title: "Google+" },
    ],
    drawer: false,
    group: null,
    menuItems: [
        { text: 'Home', icon: 'mdi-home', route: '/' },
        { text: 'About', icon: 'mdi-information', route: '/about' },
        { text: 'Resume', icon: 'mdi-file-document', route: '/resume' },
        { text: 'Portfolio', icon: 'mdi-folder-open', route: '/portfolio' },
        { text: 'Blog', icon: 'mdi-pencil', route: '/blog' },
        { text: 'Contact', icon: 'mdi-email', route: '/contact' },
        { text: 'Menu', icon: 'mdi-menu', route: '/menu' }, // Additional item
        { text: 'Rewards', icon: 'mdi-trophy', route: '/rewards' }, // Additional item
        { text: 'Gift Cards', icon: 'mdi-gift', route: '/gift-cards' }, // Additional item
      ],
      items: [
      {
        "prepend-icon": "mdi-robot",
        link: "/AiToolsList",
        title: "AI Free Tools",
        value: "myfiles",
      },
      {
        "prepend-icon": "mdi-school",
        link: "/html",
        title: "HTML Tutorial PDF",
        value: "Learning-HTML",
      },
      {
        "prepend-icon": "mdi-book",
        link: "/vue",
        title: "Vue.js Tutorial",
        value: "Learning-Vue",
      },
      {
        "prepend-icon": "mdi-language-javascript",
        link: "/javascript",
        title: "JavaScript Basics",
        value: "Learning-Javascript",
      },
      {
        "prepend-icon": "mdi-language-python",
        link: "/python",
        title: "Python Basics",
        value: "Learning-Python",
      },
      {
        "prepend-icon": "mdi-react",
        link: "/React",
        title: "React Basics",
        value: "Learning-React",
      },
      {
        "prepend-icon": "mdi-language-php",
        link: "/php",
        title: "PHP Basics",
        value: "Learning-PHP",
      },
      {
        "prepend-icon": "mdi-language-java",
        link: "/java",
        title: "Java Basics",
        value: "Learning-Java",
      },
      {
        "prepend-icon": "mdi-language-cpp",
        link: "/c++",
        title: "C++ Basics",
        value: "Learning-c++",
      },
      {
        "prepend-icon": "mdi-language-ruby",
        link: "/ruby",
        title: "Ruby Basics",
        value: "Learning-Ruby",
      },
      {
        "prepend-icon": "mdi-whatsapp",
        title: "whatsapp",
        value: "shared",
      },
      {
        "prepend-icon": "mdi-instagram",
        title: "Instagram",
        value: "Instagram",
      },
    ],
    selectedColor: "#3f51b5",
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
  created() {
    // Load the selected color from cookies if available
    const savedColor = Cookies.get("selectedColor");
    if (savedColor) {
      this.selectedColor = savedColor;
    }
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,500;0,600;1,400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap");
*,
*::before,
*::after {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  font-family: "Roboto", sans-serif;
}


.hacker {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;
  gap: 4rem;
  margin-top: 4rem;

}
ul {
  list-style: none;
}

/** Example **/

.wrapper {
  height: 450px;
  width: 100%;
  max-width: 550px;
  display: flex;
  gap: 1rem;
}
*{
  margin: 0px;
  padding:0px;
  font-family: sans-serif;
}
body{
  display:flex;
  justify-content:center;
  height: 100vh;
  align-items:center;
}
img{
  height: 400px;
  width: 250px;
  border-radius:5px;
  transition:.5s;
}
.gallery{
  display: flex;
}
.card{
  height: 380px;
  margin: 50px;
  box-shadow: 5px 5px 20px black;
  overflow:hidden;
  position: relative;
}
.description{
  height:60px;
  width: 250px;
  padding:6px;
  box-sizing: border-box;
  position:absolute;
  bottom:10px;
  color:#FFF;
  transition: .5s;
}
h1{
  margin:10px;
  font-size: 30px;
}
p{
  font-size: 14px;
  margin:10px;
  visibility:hidden;
  opacity: 0;
}
.card:hover{
  cursor:pointer;
}
.card:hover .description{
  height:200px;
  bottom:-4px;
  background:black;
}
.card:hover p{
  opacity:1;
  visibility: visible;
}
.card:hover img{
  transform:scale(1.1);
}
.wrapper article {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  position: relative;
  flex-grow: 1;
  flex-basis: 0;
  min-width: 60px;
  height: 100%;
  cursor: pointer;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}
.wrapper article .backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  z-index: 1;
  opacity: 0.5;
  transition: all 0.5s ease-in-out;
}

.wrapper article img {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.wrapper article:hover {
  flex-basis: 100%;
}
.wrapper:hover article:not(:hover) {
  flex-basis: 0;
}
.wrapper article:hover .backdrop {
  opacity: 0.1;
}
.wrapper article button {
  position: relative;
  width: 0px;
  height: 40px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  z-index: 2;
  border: none;
  background: white;
  color: #000;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
}
.wrapper article button span {
  font-weight: medium;
  font-size: 14px;
  text-transform: uppercase;
  opacity: 0;
}
.wrapper article button:hover {
  background-color: white;
  color: #000;
}
.wrapper article:hover button {
  width: 100%;
}
.wrapper article:hover button span {
  opacity: 1;
}

/* ======================== Footer ======================== */

footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  gap: 14px;
  padding: 40px 0;
  margin-top: auto;
}
footer p {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
}
footer a {
  font-weight: 500;
}
footer .footer-social {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
}
footer .footer-link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #4d4d4d;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}

:root {
  --body-bg-color: #111;
  --body-font-color: white;
  --primary-font: Montserrat;
}

body {
  margin: 0;
  font-family: var(--primary-font);
  background: var(--body-bg-color);
  color: var(--body-font-color);
  overflow-x: hidden !important;
  padding-top: 150px;
  padding-bottom: 300px;
  height: 100vh;
  font-size: min(max(16px, calc(1.25vw + 0.5vh)), 26px);
}

@media (max-width: 960px) {
  body {
    padding-top: 35px;
  }
}

.scrolling-story-grid {
  width: 80vw;
  margin: 0 auto;
}

.scrolling-story-grid article {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.scrolling-story-grid article div {
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 50px;
}

.scrolling-story-grid figure {
  margin: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.section-logo {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  height: auto;
  aspect-ratio: 1/1;
}
.OneHumanFamily-logo-title {
  position: absolute;
  display:none;
}

.rb-red {
  fill: red;

  background: rgba(122, 22, 15, 0.9) !important;
  background-color: rgba(122, 22, 15, 0.9) !important;
}
.rb-turquoise {
  fill: #1b86bc;

  background: rgba(51, 121, 157, 0.8) !important;
  background-color: rgba(51, 121, 157, 0.8) !important;
}
.rb-pink {
  fill: #f13c9d;

  background: rgba(189, 40, 92, 0.9) !important;
  background-color: rgba(189, 40, 92, 0.9) !important;
}

.rb-green {
  fill: #1e9730;
  background: rgba(36, 87, 59, 0.9) !important;
  background-color: rgba(36, 87, 59, 0.9) !important;
}
.rb-purple {
  fill: #6f0a82;
  background: rgba(48, 98, 21, 0.9) !important;
  background-color: rgba(48, 98, 21, 0.9) !important;
}
.rb-yellow {
  fill: #f9e81f;
  background: rgba(174, 131, 46, 0.9) !important;
  background-color: rgba(174, 131, 46, 0.9) !important;
}
.rb-blue {
  fill: #243796;
  background: rgba(12, 1, 162, 0.7) !important;
  background-color: rgba(12, 1, 162, 0.7) !important;
}
.rb-orange {
  fill: #f78121;
  background: rgba(197, 41, 28, 0.9) !important;
  background-color: rgba(197, 41, 28, 0.9) !important;
}
.yellow {
  fill: yellow;
  background: rgba(122, 22, 15, 0.9) !important;
  background-color: rgba(122, 22, 15, 0.9) !important;
}
.red {
  fill: red;
  background: rgba(122, 22, 15, 0.9) !important;
  background-color: rgba(122, 22, 15, 0.9) !important;
}

/* SVG SETTINGS  */
.rotate {
  /* 100% width of parent container */
  /* ANIMATION */
  animation: rotation 40s linear infinite;
  /* Bring up brightness  */
  filter: brightness(1.25);
}
/* Animation */
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(1turn);
  }
}

.grid-50 {
  display: grid;
  grid-gap: 0px;
  grid-template-columns: 1fr 1fr;
}

@media (max-width: 960px) {
  .grid-50 {
    display: grid;
    grid-gap: 0px;
    grid-template-columns: 1fr;
  }
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
  letter-spacing: 1px;

  color: pink;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-weight: 700 !important;
  background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/hAzJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMC1jMDAxIDc5LmMwMjA0YjJkZWYsIDIwMjMvMDIvMDItMTI6MTQ6MjQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNC4zIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjgxOThGQTI3RUREMTExRURCMEMwQ0VDMkU2RDUzNDM0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjgxOThGQTI4RUREMTExRURCMEMwQ0VDMkU2RDUzNDM0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ODE5OEZBMjVFREQxMTFFREIwQzBDRUMyRTZENTM0MzQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ODE5OEZBMjZFREQxMTFFREIwQzBDRUMyRTZENTM0MzQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7/2wBDABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8e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);
}

* {
  padding: 0px;
  margin: 0px;
}
.main-container {
  margin: 0px;
  padding: 0px;
  background-color: black;
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
}
.blur-circle1 {
  width: 200px;
  height: 200px;
  background: linear-gradient(to bottom, white, pink);
  border-radius: 50%;
  filter: blur(120px);
  position: absolute;
  left: 10%;
  top: 20%;
  /* transform: translate(50%); */
}
.blur-circle2 {
  width: 200px;
  height: 200px;
  background: linear-gradient(to bottom, white, pink);
  border-radius: 50%;
  filter: blur(100px);
  position: absolute;
  right: 10%;
  top: 20%;
  /* transform: translate(50%); */
}
body {
  font-family: "Open Sans", sans-serif;
}
a {
  text-decoration: none;
}
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap");
* {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
  font-family: "Nunito", sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #002733;
}

.orange {
  color: #FF7A01;
}

.montserrat {
  font-family: "Montserrat", sans-serif;
}

img {
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.container {
  max-width: 1300px;
  margin: 0px auto 0px auto;
  padding: 0px 40px;
}
@media (min-width: 1200px) and (max-width: 1441px) {
  .container {
    max-width: 1250px;
    padding: 0px 36px;
  }
}
@media (max-width: 767px) {
  .container {
    padding: 0px 30px;
  }
}
@media (max-width: 479px) {
  .container {
    padding: 0px 30px 0px 20px;
  }
}

.about-me {
  padding-top: 50px;
  padding-bottom: 50px;
}
.about-me .about-me-container {
  position: relative;
}
@media (max-width: 960px) {
  .about-me .about-me-container {
    padding-bottom: 100px;
  }
}
.about-me .about-me-container .about-me-title {
  font-size: 55px;
  color: #87A4B6;
  font-weight: 700;
}
@media (max-width: 500px) {
  .about-me .about-me-container .about-me-title {
    font-size: 30px;
  }
}

.about-me-flex-container {
  margin-top: -25px;
  margin-left: 150px;
  left: 100px;
  display: flex;
  justify-content: space-between;
}
@media (max-width: 960px) {
  .about-me-flex-container {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
    gap: 50px;
  }
}
@media (max-width: 500px) {
  .about-me-flex-container {
    margin-top: -10px;
  }
}
.about-me-flex-container .about-me-image {
  position: relative;
  width: 400px;
  height: 400px;
}
@media (max-width: 500px) {
  .about-me-flex-container .about-me-image {
    width: 300px;
    height: 300px;
  }
}
.about-me-flex-container .about-me-image .back-div {
  position: absolute;
  bottom: 0;
  z-index: -3;
  background-color: #013747;
  width: 80%;
  height: 80%;
}
.about-me-flex-container .about-me-image .black-image {
  z-index: -2;
  position: absolute;
  left: 10px;
  bottom: 10px;
  height: 100%;
}
.about-me-flex-container .about-me-image .black-image img {
  height: 100%;
}
.about-me-flex-container .about-me-image .main-image {
  width: 70%;
  height: 70%;
  overflow: hidden;
  position: absolute;
  left: 25%;
  top: 5%;
  box-shadow: rgb(0, 0, 0) 0px 7px 50px 0px;
  transition: all 0.2s ease-out;
}
.about-me-flex-container .about-me-image .main-image:hover {
  transform-origin: top center;
  transform: scale(1.5);
  border-radius: 25px;
}
.about-me-flex-container .about-me-image .main-image img {
  transform-origin: center center;
  transform: scale(2);
  -o-object-fit: cover;
     object-fit: cover;
  transition: all 0.2s ease-out;
}
.about-me-flex-container .about-me-image .main-image img:hover {
  transform: scale(1);
}
.about-me-flex-container .about-me-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  flex: 0 0 40%;
}
@media (max-width: 960px) {
  .about-me-flex-container .about-me-content {
    flex-direction: row-reverse;
  }
}
.about-me-flex-container .about-me-content .logo {
  max-width: 200px;
}
.about-me-flex-container .about-me-content .logo img {
  filter: drop-shadow(0 0 25px rgb(0, 0, 0));
}
@media (max-width: 500px) {
  .about-me-flex-container .about-me-content .logo img {
    transform: rotateZ(90deg);
  }
}
.about-me-flex-container .about-me-content .text {
  color: #87A4B6;
  font-weight: 600;
  font-size: 18px;
}
@media (max-width: 500px) {
  .about-me-flex-container .about-me-content .text {
    font-size: 16px;
  }
}



.mail-button {
  display: flex;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  padding: 15px;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
}
.mail-button a {
  display: flex;
}
.mail-button img {
  -o-object-fit: contain;
     object-fit: contain;
  transition: all 0.2s ease-out;
}


.mail-button2 {
  background-color: #001925;
  position: absolute;
  bottom: 0;
  left: 0;
  border: 10px solid #001925;
}
.mail-button2 img {
  filter: invert(56%) sepia(42%) saturate(4795%) hue-rotate(360deg) brightness(103%) contrast(105%);
}
.mail-button2:hover {
  background-color: #FF7A01;
  border: 10px solid #FF7A01;
}
.mail-button2:hover img {
  filter: unset;
  transform: scale(1.5);
}

.portfolio-link {

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.portfolio-link a{
  text-decoration: none;
  color: white;

  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
/* Small */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
/* Medium */
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
/* Large */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
/* End Global Rules */

/* Start Landing Page */
.landing-page header {
  min-height: 80px;
  display: flex;
}
@media (max-width: 767px) {
  .landing-page header {
    min-height: auto;
    display: initial;
  }
}
.cls-1 {
            fill: #fff;
          }
.landing-page header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media (max-width: 767px) {
  .landing-page header .container {
    flex-direction: column;
    justify-content: center;
  }
}
.landing-page header .logo {
  color: #5d5d5d;
  font-style: italic;
  text-transform: uppercase;
  font-size: 20px;
}
@media (max-width: 767px) {
  .landing-page header .logo {
    margin-top: 20px;
    margin-bottom: 20px;
  }
}
.landing-page header .links {
  display: flex;
  align-items: center;
}
@media (max-width: 767px) {
  .landing-page header .links {
    text-align: center;
    gap: 10px;
  }
}
.landing-page header .links li {
  margin-left: 30px;
  color: #5d5d5d;
  cursor: pointer;
  transition: 0.3s;
}
@media (max-width: 767px) {
  .landing-page header .links li {
    margin-left: auto;
  }
}
.landing-page header .links li:last-child {
  border-radius: 20px;
  padding: 10px 20px;
  color: #fff;
  background-color: #6c63ff;
}
.landing-page header .links li:not(:last-child):hover {
  color: #6c63ff;
}
.landing-page .content .container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 140px;
  min-height: calc(100vh - 80px);
}
@media (max-width: 767px) {
  .landing-page .content .container {
    gap: 0;
    min-height: calc(100vh - 101px);
    justify-content: center;
    flex-direction: column-reverse;
  }
}
@media (max-width: 767px) {
  .landing-page .content .info {
    text-align: center;
    margin-bottom: 15px;
  }
}
.landing-page .content .info h1 {
  color: #bbbbbb;
  font-size: 44px;
}
.landing-page .content .info p {
  margin: 0;
  line-height: 1.6;
  font-size: 15px;
  color: #b3b3b3;
}
.landing-page .content .info button {
  border: 0;
  border-radius: 20px;
  padding: 12px 30px;
  margin-top: 30px;
  cursor: pointer;
  color: #fff;
  background-color: #6c63ff;
}
.landing-page .content .image img {
  max-width: 100%;
}
/* End Landing Page */

.main-image {
  /* mix-blend-mode:exclusion */
  width: 600px;
  height: 400px;
}
h1,
p {
  color: white;
}
.new{

  border-radius: 25px;
  font: bold;
  font-style: italic;
}
</style>
