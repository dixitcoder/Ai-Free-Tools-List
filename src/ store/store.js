// src/store/store.js
import { createStore } from 'vuex';
import { db } from '@/services/firebaseauth'; // Import your Firebase Firestore instance
import { collection, onSnapshot } from 'firebase/firestore';

const store = createStore({
  state() {
    return {
      tools: [
        {
          "_id": "HcbX6OhVZcvGbHZwPJUX",
          "Category": "A deep learning platform that automates model creation and deployment for businesses to leverage AI.",
          "Name": "Abacus.ai",
          "description": "Data Science",
          "link": "https://abacus.ai/",
          "__collections__": {}
       } ,
       {
          "_id": "63grMeHCK4sjdGO6006T",
          "Category": "Academic",
          "Name": "Upword",
          "description": "AI tool for note-taking and researching to get key insights in large amounts of text.",
          "link": "https://www.upword.ai/",
          "__collections__": {}
       },
       {
          "_id": "ElBJKk5gjlU8EXDFG3bR",
          "Category": "Academic",
          "Name": "Scholarcy",
          "description": "AI tool that creates summary flashcards from academic papers.",
          "link": "https://www.scholarcy.com/",
          "__collections__": {}
       },
       {
          "_id": "NMoKDRrNDvH9aqIdOSbY",
          "Category": "Academic",
          "Name": "Trinka",
          "description": "AI writing assistant for academic and technical writing.",
          "link": "https://www.trinka.ai/",
          "__collections__": {}
       },
       {
          "_id": "iL3OCcWewYWWqOMXdeme",
          "Category": "Academic",
          "Name": "Socratic",
          "description": "AI tool for homework help.",
          "link": "https://socratic.org/",
          "__collections__": {}
       },
       {
          "_id": "t190RgYFj4OUNYtjlSNZ",
          "Category": "Academic",
          "Name": "Semantic Scholar",
          "description": "A free, AI-powered research tool for scientific literature.",
          "link": "https://www.semanticscholar.org/",
          "__collections__": {}
       },
       {
          "_id": "CiSRXln8Ao1CJyjefHDb",
          "Category": "Accessibility",
          "Name": "Cognivue",
          "description": "Provides cognitive assessment tools to evaluate cognitive function.",
          "link": "https://www.cognivue.com/",
          "__collections__": {}
       },
       {
          "_id": "o1wqWdXyRo99ocoVvUqF",
          "Category": "Accessibility",
          "Name": "Ava",
          "description": "An AI-powered transcription app for deaf and hard-of-hearing people.",
          "link": "https://www.ava.me/",
          "__collections__": {}
       },
       {
          "_id": "7OW4I1xfTzkQuzSJvuA4",
          "Category": "Audio",
          "Name": "Stream Labs Podcast Editor",
          "description": "AI podcast editing tool offering trimming, splitting, and arranging audio, as well as adding music and sound effects.",
          "link": "https://streamlabs.com/podcast-editor",
          "__collections__": {}
       },
       {
          "_id": "8xREwwVzuc0FnnuWClql",
          "Category": "Audio",
          "Name": "Aflorithmic",
          "description": "Produces AI-driven voice-over and audio content with advanced algorithms for realistic sound.",
          "link": "https://www.aflorithmic.ai/",
          "__collections__": {}
       },
       {
          "_id": "HTcEIymzZK11hYmZLVux",
          "Category": "Audio",
          "Name": "Vocal Remover",
          "description": "AI tool for removing vocals from songs.",
          "link": "https://vocalremover.org/",
          "__collections__": {}
       },
       {
          "_id": "KB4haWpzqVN9NWtXKkOi",
          "Category": "Audio",
          "Name": "Soundraw",
          "description": "AI tool for creating original music.",
          "link": "https://soundraw.io/",
          "__collections__": {}
       },
       {
          "_id": "S39QSE8brQ5n59DaT47w",
          "Category": "Audio",
          "Name": "Podcastle",
          "description": "A tool to convert articles into podcasts.",
          "link": "https://podcastle.ai/",
          "__collections__": {}
       },
       {
          "_id": "V0c3n9tehxhTZ9Jlzebq",
          "Category": "Audio",
          "Name": "Deepgram",
          "description": "An AI-powered voice recognition and transcription service.",
          "link": "https://deepgram.com/",
          "__collections__": {}
       },
       {
          "_id": "VdcdcQonnvihKsD6LbsK",
          "Category": "Audio",
          "Name": "Cleanvoice",
          "description": "An AI-powered tool that removes background noise from audio files, improving sound quality.",
          "link": "https://cleanvoice.ai/",
          "__collections__": {}
       },
       {
          "_id": "fDRAszmtnFaH9rLPDD71",
          "Category": "Audio",
          "Name": "Lovo",
          "description": "AI voiceover platform with natural-sounding voices.",
          "link": "https://www.lovo.ai/",
          "__collections__": {}
       },
       {
          "_id": "vuVhc8NjLElZ9n2f5Y5J",
          "Category": "Audio",
          "Name": "PlayHT",
          "description": "Converts text into lifelike speech using AI.",
          "link": "https://play.ht/",
          "__collections__": {}
       },
       {
          "_id": "y3o5U0aPxHUgdkwcosbc",
          "Category": "Audio",
          "Name": "WellSaid Labs",
          "description": "AI tool for creating synthetic voices.",
          "link": "https://wellsaidlabs.com/",
          "__collections__": {}
       },
       {
          "_id": "zVW2ehhhRbQt2dEgpVKy",
          "Category": "Audio",
          "Name": "Krisp",
          "description": "An AI tool that removes background noise in calls.",
          "link": "https://krisp.ai/",
          "__collections__": {}
       },
       {
          "_id": "4HlR9FdLLPr2b36Zs6Eo",
          "Category": "Automation",
          "Name": "Celayix",
          "description": "A workforce management software that uses AI to automate scheduling, time tracking, and communication processes.",
          "link": "https://www.celayix.com/",
          "__collections__": {}
       },
       {
          "_id": "5FKA1klZiTxpjKgfCrPN",
          "Category": "Automation",
          "Name": "WorkHub",
          "description": "An AI platform that automates repetitive tasks and workflows, improving efficiency and productivity in the workplace.",
          "link": "https://www.workhub.ai/",
          "__collections__": {}
       },
       {
          "_id": "CslLbe9LkM82FCNQrBxv",
          "Category": "Automation",
          "Name": "Clevr AI",
          "description": "A platform that uses AI to automate business processes, enhancing operational efficiency.",
          "link": "https://clevr.ai/",
          "__collections__": {}
       },
       {
          "_id": "eaFBNXtgaJRov7vroBHT",
          "Category": "Automation",
          "Name": "Jamie",
          "description": "A virtual employee that uses AI to automate repetitive tasks.",
          "link": "https://www.meetjamie.ai/",
          "__collections__": {}
       },
       {
          "_id": "oCoyFSVTXgqPEfO1eoPg",
          "Category": "Automation",
          "Name": "Steve AI",
          "description": "AI tool for scheduling meetings.",
          "link": "https://www.steve.ai/",
          "__collections__": {}
       },
       {
          "_id": "pd0Lj5UpEBpEbsPx8Wh4",
          "Category": "Automation",
          "Name": "Browse AI",
          "description": "An automation tool that interacts with websites just like a human, enabling businesses to automate their web-based tasks.",
          "link": "https://www.browse.ai/",
          "__collections__": {}
       },
       {
          "_id": "xqIH2VDqAFHPaVcGUZFy",
          "Category": "Automation",
          "Name": "Bardeen",
          "description": "An automation tool that helps streamline repetitive tasks across various applications, enhancing productivity.",
          "link": "https://www.bardeen.ai/",
          "__collections__": {}
       },
       {
          "_id": "ynaQQApMktAyKM57dDa8",
          "Category": "Automation",
          "Name": "Tara AI",
          "description": "AI platform for scoping and executing projects.",
          "link": "https://tara.ai/",
          "__collections__": {}
       },
       {
          "_id": "CbJ0eixSHrb17RpsxXrs",
          "Category": "Career",
          "Name": "This Resume Does Not Exist",
          "description": "An AI-powered tool that generates unique, fictitious resumes. It's often used for testing and development purposes in HR technologies.",
          "link": "https://thisresumedoesnotexist.com/",
          "__collections__": {}
       },
       {
          "_id": "H272cDb0cRP9Ijxdv4xW",
          "Category": "Career",
          "Name": "Resume Maker",
          "description": "An online tool that assists users in creating professional resumes. It offers various templates, customization options, and guidance to make the process easier.",
          "link": "https://www.resumemaker.online/",
          "__collections__": {}
       },
       {
          "_id": "h2FoECbu1ex8lWvlJmoo",
          "Category": "Career",
          "Name": "Kickresume",
          "description": "An online resume and cover letter builder.",
          "link": "https://www.kickresume.com/en/",
          "__collections__": {}
       },
       {
          "_id": "wz0894114TFeY0ru48LM",
          "Category": "Career",
          "Name": "LongShot AI",
          "description": "An AI-powered tool for finding and applying to jobs.",
          "link": "https://www.longshot.ai/",
          "__collections__": {}
       },
       {
          "_id": "3u5nVNAiQ0FkrY6aBJV7",
          "Category": "Chatbot",
          "Name": "Meya",
          "description": "A platform for building, training, and deploying AI-powered virtual assistants. It helps businesses automate customer interactions across various channels.",
          "link": "https://www.meya.ai/",
          "__collections__": {}
       },
       {
          "_id": "IaHqpAqSHp7CRJXe9gy5",
          "Category": "Chatbot",
          "Name": "Poe",
          "description": "Developed by Quora, Poe AI is a service that allows users to communicate with AI bots, ask questions, get instant responses, and even create their own chatbots.",
          "link": "https://poe.com/",
          "__collections__": {}
       },
       {
          "_id": "TZ6XUYW7PaKNkF1VyZPQ",
          "Category": "Chatbot",
          "Name": "Taplio",
          "description": "An AI-based platform providing businesses with chatbot services to automate customer support, lead generation, and sales processes.",
          "link": "https://taplio.com/",
          "__collections__": {}
       },
       {
          "_id": "ZEbyyiCTCCStdSjOb8JJ",
          "Category": "Chatbot",
          "Name": "Watermelon",
          "description": "Platform offering AI chatbots for customer service allowing businesses to automate conversations, improve response times, and enhance customer experience.",
          "link": "https://watermelon.co/",
          "__collections__": {}
       },
       {
          "_id": "fUPL8r8hPi4IDK79wx3C",
          "Category": "Chatbot",
          "Name": "SecondBrain",
          "description": "An AI chatbot that helps users organize, search and share their digital information, acting as a personal knowledge management system.",
          "link": "https://www.secondbrain.fyi/",
          "__collections__": {}
       },
       {
          "_id": "ka6Mcpst8u5FrNApW9qW",
          "Category": "Chatbot",
          "Name": "Tiledesk",
          "description": "A live chat platform integrated with AI-powered chatbots, helping businesses manage customer support more efficiently.",
          "link": "https://tiledesk.com/",
          "__collections__": {}
       },
       {
          "_id": "xOyuY1EFnwkVjt6j7E1Y",
          "Category": "Chatbot",
          "Name": "PolyAI",
          "description": "A conversational AI technology company that builds voice assistants capable of handling complex customer inquiries over the phone.",
          "link": "https://poly.ai/",
          "__collections__": {}
       },
       {
          "_id": "2f4K7Dt4rs8JOIAXAPeS",
          "Category": "Coding",
          "Name": "Sourcery",
          "description": "AI tool that automatically finds and removes duplicate code as well as extract duplicate code to keep code clean and simple.",
          "link": "https://sorcery.ai/",
          "__collections__": {}
       },
       {
          "_id": "8xhpijrv3u6BPlxdlner",
          "Category": "Coding",
          "Name": "Fronty",
          "description": "An AI-powered tool that converts design into code.",
          "link": "https://fronty.com/",
          "__collections__": {}
       },
       {
          "_id": "JcIkU1eEYflOnGzp5gO1",
          "Category": "Coding",
          "Name": "Anthropic",
          "description": "Aims to increase transparency in machine learning systems, making AI more understandable and reliable.",
          "link": "https://www.anthropic.com/product",
          "__collections__": {}
       },
       {
          "_id": "L4dJF5eLqEyvT4avNZf1",
          "Category": "Coding",
          "Name": "Github Copilot",
          "description": "An AI-powered coding assistant that suggests lines or blocks of code.",
          "link": "https://github.com/features/copilot",
          "__collections__": {}
       },
       {
          "_id": "Pj63VKdGvePq6oLeOpGV",
          "Category": "Coding",
          "Name": "Codeball",
          "description": "A platform offering coding challenges and contests for programmers.",
          "link": "https://www.ycombinator.com/companies/codeball",
          "__collections__": {}
       },
       {
          "_id": "UxgxHzx2etnG9aFCvZnK",
          "Category": "Coding",
          "Name": "Tabnine",
          "description": "AI coding assistant for autocomplete.",
          "link": "https://www.tabnine.com/",
          "__collections__": {}
       },
       {
          "_id": "cqS8jZXmRPxN5sAOepS3",
          "Category": "Coding",
          "Name": "Ai2sql",
          "description": "Translates natural language into SQL queries using AI, simplifying database interaction.",
          "link": "https://www.ai2sql.io/",
          "__collections__": {}
       },
       {
          "_id": "qIqGdR36UywlkCqxQ0aa",
          "Category": "Coding",
          "Name": "Replit",
          "description": "An online coding environment.",
          "link": "https://replit.com/site/ghostwriter",
          "__collections__": {}
       },
       {
          "_id": "qzJ7I9xY5togV9PUpM79",
          "Category": "Coding",
          "Name": "Galileo AI",
          "description": "AI tool for app testing and debugging.",
          "link": "https://www.usegalileo.ai/",
          "__collections__": {}
       },
       {
          "_id": "sfYERmTtxVhUUjJk2Tnr",
          "Category": "Coding",
          "Name": "Kodezi",
          "description": "An AI platform that helps in creating code for applications.",
          "link": "https://kodezi.com/",
          "__collections__": {}
       },
       {
          "_id": "0Yy4m1O7fCQexVsAvLKU",
          "Category": "Content",
          "Name": "Clickup AI",
          "description": "An AI feature built directly into the platform that's uniquely tailored to exact use cases to generate refined results. Summarize lengthy Docs or comments, create action items, and write with clarity using hundreds of research-backed AI prompts for every role. ",
          "link": "https://clickup.com/features/ai",
          "__collections__": {}
       },
       {
          "_id": "1S8W0hVHcI1exsjCqPzj",
          "Category": "Content",
          "Name": "Contentedge",
          "description": "A content marketing platform offering strategy, creation, and promotion services.",
          "link": "https://www.contentedge.com/",
          "__collections__": {}
       },
      ],
    };
  },
  mutations: {
    setTools(state, tools) {
      state.tools = tools;
    },
    addTool(state, tool) {
      state.tools.push(tool);
    },
    deleteTool(state, toolIndex) {
      state.tools.splice(toolIndex, 1);
    },
  },
  actions: {
    async fetchTools({ commit }) {
      const toolsCollectionRef = collection(db, 'tools-ai');
      onSnapshot(toolsCollectionRef, (snapshot) => {
        const tools = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        commit('setTools', tools);
      });
    },
    async addTool({ commit }, tool) {
      // Add logic to add tool to Firestore here if needed
      commit('addTool', tool);
    },
    async deleteTool({ commit, state }, toolIndex) {
      // Assuming toolIndex is the ID of the tool to delete
      // Add logic to delete tool from Firestore here if needed
      commit('deleteTool', toolIndex);
    },
  },
  getters: {
    getAllTools(state) {
      return state.tools;
    },
  },
});

export default store;
