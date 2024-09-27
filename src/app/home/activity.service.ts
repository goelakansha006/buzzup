import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { 


   
  }

  getActivities(){
      return [
        {
          "id": 1,
          "is_class": null,
          "is_exposed": null,
          "name": "Yoga",
          "activity_image": "https://api.buzzup.club/static/activity/yoga.png"
        },
        {
          "id": 2,
          "is_class": null,
          "is_exposed": null,
          "name": "Zumba",
          "activity_image": "https://api.buzzup.club/static/activity/zumba.png"
        },
        {
          "id": 4,
          "is_class": null,
          "is_exposed": null,
          "name": "Bouldering",
          "activity_image": "https://api.buzzup.club/static/activity/bouldering.png"
        },
        {
          "id": 5,
          "is_class": null,
          "is_exposed": null,
          "name": "Painting",
          "activity_image": "https://api.buzzup.club/static/activity/painting.png"
        },
        {
          "id": 6,
          "is_class": null,
          "is_exposed": null,
          "name": "Martial Arts",
          "activity_image": "https://api.buzzup.club/static/activity/martial_arts.png"
        },
        {
          "id": 7,
          "is_class": null,
          "is_exposed": null,
          "name": "Skating",
          "activity_image": "https://api.buzzup.club/static/activity/skating.png"
        },
        {
          "id": 8,
          "is_class": null,
          "is_exposed": null,
          "name": "Badminton",
          "activity_image": "https://api.buzzup.club/static/activity/badminton.png"
        },
        {
          "id": 9,
          "is_class": null,
          "is_exposed": null,
          "name": "Chess",
          "activity_image": "https://api.buzzup.club/static/activity/chess.png"
        },
        {
          "id": 10,
          "is_class": null,
          "is_exposed": null,
          "name": "Swimming",
          "activity_image": "https://api.buzzup.club/static/activity/swimming.png"
        },
        {
          "id": 11,
          "is_class": null,
          "is_exposed": null,
          "name": "Piano",
          "activity_image": "https://api.buzzup.club/static/activity/piano.png"
        },
        {
          "id": 12,
          "is_class": null,
          "is_exposed": null,
          "name": "Guitar",
          "activity_image": "https://api.buzzup.club/static/activity/guitar.png"
        },
        {
          "id": 13,
          "is_class": null,
          "is_exposed": null,
          "name": "Violin",
          "activity_image": "https://api.buzzup.club/static/activity/violin.png"
        },
        {
          "id": 14,
          "is_class": null,
          "is_exposed": null,
          "name": "Salsa",
          "activity_image": "https://api.buzzup.club/static/activity/salsa.png"
        },
        {
          "id": 15,
          "is_class": null,
          "is_exposed": null,
          "name": "Ballet",
          "activity_image": "https://api.buzzup.club/static/activity/ballet.png"
        },
        {
          "id": 16,
          "is_class": null,
          "is_exposed": null,
          "name": "Programming",
          "activity_image": "https://api.buzzup.club/static/activity/programming.png"
        },
        {
          "id": 17,
          "is_class": null,
          "is_exposed": null,
          "name": "Creative writing",
          "activity_image": "https://api.buzzup.club/static/activity/creative_writing.png"
        },
        {
          "id": 18,
          "is_class": null,
          "is_exposed": null,
          "name": "Handwriting",
          "activity_image": "https://api.buzzup.club/static/activity/handwriting.png"
        },
        {
          "id": 19,
          "is_class": null,
          "is_exposed": null,
          "name": "Resin Art",
          "activity_image": "https://api.buzzup.club/static/activity/resin_art.png"
        },
        {
          "id": 20,
          "is_class": null,
          "is_exposed": null,
          "name": "Science",
          "activity_image": "https://api.buzzup.club/static/activity/science.png"
        },
        {
          "id": 21,
          "is_class": null,
          "is_exposed": null,
          "name": "Puzzle",
          "activity_image": "https://api.buzzup.club/static/activity/puzzle.png"
        },
        {
          "id": 22,
          "is_class": null,
          "is_exposed": null,
          "name": "Music",
          "activity_image": "https://api.buzzup.club/static/activity/music.png"
        },
        {
          "id": 23,
          "is_class": null,
          "is_exposed": null,
          "name": "Personality Development",
          "activity_image": "https://api.buzzup.club/static/activity/personality_development.png"
        },
        {
          "id": 25,
          "is_class": null,
          "is_exposed": null,
          "name": "Phonics",
          "activity_image": null
        },
        {
          "id": 26,
          "is_class": null,
          "is_exposed": null,
          "name": "Dance",
          "activity_image": "https://api.buzzup.club/static/activity/dance.png"
        },
        {
          "id": 27,
          "is_class": null,
          "is_exposed": null,
          "name": "Vedic Maths",
          "activity_image": "https://api.buzzup.club/static/activity/vedic_maths.png"
        },
        {
          "id": 28,
          "is_class": null,
          "is_exposed": null,
          "name": "Sports",
          "activity_image": "https://api.buzzup.club/static/activity/sports.png"
        },
        {
          "id": 30,
          "is_class": null,
          "is_exposed": null,
          "name": "Literary Arts",
          "activity_image": null
        },
        {
          "id": 31,
          "is_class": null,
          "is_exposed": null,
          "name": "Performance Arts",
          "activity_image": "https://api.buzzup.club/static/activity/performance_arts.png"
        },
        {
          "id": 35,
          "is_class": null,
          "is_exposed": null,
          "name": "Magic Tricks",
          "activity_image": "https://api.buzzup.club/static/activity/magic_arts.png"
        },
        {
          "id": 36,
          "is_class": null,
          "is_exposed": null,
          "name": "Fine Arts",
          "activity_image": "https://api.buzzup.club/static/activity/fine_arts.png"
        },
        {
          "id": 37,
          "is_class": null,
          "is_exposed": null,
          "name": "Visual Arts",
          "activity_image": "https://api.buzzup.club/static/activity/visual_arts.png"
        },
        {
          "id": 38,
          "is_class": null,
          "is_exposed": null,
          "name": "Plastic Arts",
          "activity_image": "https://api.buzzup.club/static/activity/plastic_arts.png"
        },
        {
          "id": 47,
          "is_class": true,
          "is_exposed": true,
          "name": "Photography",
          "activity_image": "https://api.buzzup.club/static/activity/photography.jpeg"
        },
        {
          "id": 48,
          "is_class": true,
          "is_exposed": true,
          "name": "Carrom",
          "activity_image": "https://api.buzzup.club/static/activity/carrom.png"
        },
        {
          "id": 49,
          "is_class": true,
          "is_exposed": true,
          "name": "Football",
          "activity_image": "https://api.buzzup.club/static/activity/football.png"
        },
        {
          "id": 50,
          "is_class": true,
          "is_exposed": true,
          "name": "Crafts & decoration",
          "activity_image": "https://api.buzzup.club/static/activity/craft_and_decorations.png"
        },
        {
          "id": 51,
          "is_class": true,
          "is_exposed": true,
          "name": "Origami",
          "activity_image": "https://api.buzzup.club/static/activity/origami.png"
        },
        {
          "id": 52,
          "is_class": true,
          "is_exposed": true,
          "name": "Pottery making",
          "activity_image": "https://api.buzzup.club/static/activity/pottery_making.png"
        },
        {
          "id": 53,
          "is_class": true,
          "is_exposed": true,
          "name": "Puppetry",
          "activity_image": "https://api.buzzup.club/static/activity/puppetry.png"
        },
        {
          "id": 54,
          "is_class": true,
          "is_exposed": true,
          "name": "Story telling",
          "activity_image": "https://api.buzzup.club/static/activity/story_telling.png"
        },
        {
          "id": 55,
          "is_class": true,
          "is_exposed": true,
          "name": "Graphic designing",
          "activity_image": "https://api.buzzup.club/static/activity/graphic_designing.png"
        },
        {
          "id": 56,
          "is_class": true,
          "is_exposed": true,
          "name": "Baking",
          "activity_image": "https://api.buzzup.club/static/activity/baking.png"
        },
        {
          "id": 57,
          "is_class": true,
          "is_exposed": true,
          "name": "Indian cooking",
          "activity_image": "https://api.buzzup.club/static/activity/indian_cooking.png"
        },
        {
          "id": 58,
          "is_class": true,
          "is_exposed": true,
          "name": "Drawing",
          "activity_image": "https://api.buzzup.club/static/activity/drawing.png"
        },
        {
          "id": 59,
          "is_class": true,
          "is_exposed": true,
          "name": "Sketching",
          "activity_image": "https://api.buzzup.club/static/activity/sketching.png"
        },
        {
          "id": 60,
          "is_class": true,
          "is_exposed": true,
          "name": "Spray paints",
          "activity_image": "https://api.buzzup.club/static/activity/spray_paints.png"
        },
        {
          "id": 61,
          "is_class": true,
          "is_exposed": true,
          "name": "BasketBall",
          "activity_image": "https://api.buzzup.club/static/activity/basketball.png"
        },
        {
          "id": 62,
          "is_class": true,
          "is_exposed": true,
          "name": "Gardening",
          "activity_image": "https://api.buzzup.club/static/activity/gardening.png"
        },
        {
          "id": 63,
          "is_class": true,
          "is_exposed": true,
          "name": "Gymnastics",
          "activity_image": "https://api.buzzup.club/static/activity/gymnastics.png"
        },
        {
          "id": 67,
          "is_class": true,
          "is_exposed": true,
          "name": "Hiking",
          "activity_image": "https://api.buzzup.club/static/activity/hiking.png"
        },
        {
          "id": 68,
          "is_class": true,
          "is_exposed": true,
          "name": "Horse Riding",
          "activity_image": "https://api.buzzup.club/static/activity/horseback_riding.png"
        },
        {
          "id": 69,
          "is_class": true,
          "is_exposed": true,
          "name": "Karate",
          "activity_image": "https://api.buzzup.club/static/activity/karate.png"
        },
        {
          "id": 70,
          "is_class": true,
          "is_exposed": true,
          "name": "Squash",
          "activity_image": "https://api.buzzup.club/static/activity/squash.png"
        },
        {
          "id": 71,
          "is_class": true,
          "is_exposed": true,
          "name": "Lawn Tennis",
          "activity_image": "https://api.buzzup.club/static/activity/tennis.png"
        },
        {
          "id": 72,
          "is_class": true,
          "is_exposed": true,
          "name": "Table Tennis",
          "activity_image": "https://api.buzzup.club/static/activity/table_tennis.png"
        },
        {
          "id": 73,
          "is_class": true,
          "is_exposed": true,
          "name": "Acting , Plays & Skit",
          "activity_image": "https://api.buzzup.club/static/activity/acting.png"
        },
        {
          "id": 74,
          "is_class": true,
          "is_exposed": true,
          "name": "Classical dance",
          "activity_image": "https://api.buzzup.club/static/activity/classical_dance.png"
        },
        {
          "id": 75,
          "is_class": true,
          "is_exposed": true,
          "name": "Bollywood dance",
          "activity_image": "https://api.buzzup.club/static/activity/bollywood_dance.png"
        },
        {
          "id": 76,
          "is_class": true,
          "is_exposed": true,
          "name": "Bhangra",
          "activity_image": "https://api.buzzup.club/static/activity/bhangra.png"
        },
        {
          "id": 77,
          "is_class": true,
          "is_exposed": true,
          "name": "Western dance",
          "activity_image": "https://api.buzzup.club/static/activity/western_dance.png"
        },
        {
          "id": 78,
          "is_class": true,
          "is_exposed": true,
          "name": "Keyboard",
          "activity_image": "https://api.buzzup.club/static/activity/keyboard.png"
        },
        {
          "id": 79,
          "is_class": true,
          "is_exposed": true,
          "name": "Singing",
          "activity_image": "https://api.buzzup.club/static/activity/singing.png"
        },
        {
          "id": 80,
          "is_class": true,
          "is_exposed": true,
          "name": "Carnatic music",
          "activity_image": "https://api.buzzup.club/static/activity/carnatic_music.png"
        },
        {
          "id": 82,
          "is_class": true,
          "is_exposed": true,
          "name": "Rubik's cube",
          "activity_image": "https://api.buzzup.club/static/activity/rubik's_cube.png"
        },
        {
          "id": 83,
          "is_class": true,
          "is_exposed": true,
          "name": "Sudoku",
          "activity_image": "https://api.buzzup.club/static/activity/sudoku.png"
        },
        {
          "id": 84,
          "is_class": true,
          "is_exposed": true,
          "name": "Trivia",
          "activity_image": "https://api.buzzup.club/static/activity/trivia.png"
        },
        {
          "id": 85,
          "is_class": true,
          "is_exposed": true,
          "name": "Spellbee",
          "activity_image": "https://api.buzzup.club/static/activity/spellbee.png"
        },
        {
          "id": 86,
          "is_class": true,
          "is_exposed": true,
          "name": "Science experiments",
          "activity_image": "https://api.buzzup.club/static/activity/science_experiments.png"
        },
        {
          "id": 87,
          "is_class": true,
          "is_exposed": true,
          "name": "Sholkas",
          "activity_image": "https://api.buzzup.club/static/activity/sholkas.png"
        },
        {
          "id": 88,
          "is_class": true,
          "is_exposed": true,
          "name": "Oratory",
          "activity_image": "https://api.buzzup.club/static/activity/public_speaking.png"
        },
        {
          "id": 89,
          "is_class": true,
          "is_exposed": true,
          "name": "Leadership building",
          "activity_image": "https://api.buzzup.club/static/activity/leadership_building.png"
        },
        {
          "id": 90,
          "is_class": true,
          "is_exposed": true,
          "name": "Hindi",
          "activity_image": "https://api.buzzup.club/static/activity/hindi.png"
        },
        {
          "id": 91,
          "is_class": true,
          "is_exposed": true,
          "name": "English",
          "activity_image": "https://api.buzzup.club/static/activity/english.png"
        }
      ]
  }

  getCoach(){
    return [
      {
        "coach_id": 58,
        "name": "Palak Dawani",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_58.jpg",
        "intro": "Boost your brain, Crunch the numbers ",
        "activity": {
          "id": 82,
          "name": "Rubik's cube"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "Euro ",
            "offer_location": "in person"
          },
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "Euro ",
            "offer_location": "in person"
          },
          {
            "offer_type": "standard",
            "offer_price": 7,
            "offer_currency": "€",
            "offer_location": "in person"
          },
          {
            "offer_type": "standard",
            "offer_price": 6,
            "offer_currency": "€",
            "offer_location": "in person"
          },
          {
            "offer_type": "standard",
            "offer_price": 7,
            "offer_currency": "Euro ",
            "offer_location": "in person"
          },
          {
            "offer_type": "custom",
            "offer_price": 68,
            "offer_currency": "Euro ",
            "offer_location": "in person"
          },
          {
            "offer_type": "trial",
            "offer_price": 3,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 58,
        "name": "Palak Dawani",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_58.jpg",
        "intro": "Boost your brain, Crunch the numbers ",
        "activity": {
          "id": 27,
          "name": "Vedic Maths"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 7,
            "offer_currency": "Euro ",
            "offer_location": "in person"
          },
          {
            "offer_type": "trial",
            "offer_price": 3,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 58,
        "name": "Palak Dawani",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_58.jpg",
        "intro": "Boost your brain, Crunch the numbers ",
        "activity": {
          "id": 21,
          "name": "Puzzle"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 6,
            "offer_currency": "Euro ",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 59,
        "name": "Mayur Sharma",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_59.png",
        "intro": "Chords of Connection, Notes of Inspiration",
        "activity": {
          "id": 12,
          "name": "Guitar"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 60,
        "name": "Hitesh Mohan",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_60.jpg",
        "intro": "Dance Your Heart Out",
        "activity": {
          "id": 26,
          "name": "Dance"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "euro",
            "offer_location": "in person"
          },
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "euro",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 61,
        "name": "Sneha Subudhi",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_61.jpg",
        "intro": "Colors of Expression, Strokes of Passion",
        "activity": {
          "id": 5,
          "name": "Painting"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 63,
        "name": "Nakita Dsouza",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_63.jpg",
        "intro": "Code your dreams",
        "activity": {
          "id": 16,
          "name": "Programming"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 63,
        "name": "Nakita Dsouza",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_63.jpg",
        "intro": "Code your dreams",
        "activity": {
          "id": 17,
          "name": "Creative writing"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 10,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 64,
        "name": "Priiyanka Yadav",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_64.jpg",
        "intro": "Discover Yourself in Every Letter",
        "activity": {
          "id": 18,
          "name": "Handwriting"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 65,
        "name": "Nehaa Manna ",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_65.jpeg",
        "intro": "Crafting Serenity Through Art",
        "activity": {
          "id": 19,
          "name": "Resin Art"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 66,
        "name": "Shakuntala",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_66.jpg",
        "intro": "Harmony of Body, Mind, Spirit",
        "activity": {
          "id": 1,
          "name": "Yoga"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          },
          {
            "offer_type": "standard",
            "offer_price": 15,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 67,
        "name": "Aravind Kumar Anchalia",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_67.jpeg",
        "intro": "Journey Beyond the Poses",
        "activity": {
          "id": 1,
          "name": "Yoga"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 10,
            "offer_currency": "€",
            "offer_location": "in person"
          },
          {
            "offer_type": "standard",
            "offer_price": 8,
            "offer_currency": "Euros",
            "offer_location": "in person"
          },
          {
            "offer_type": "standard",
            "offer_price": 8,
            "offer_currency": "Euros",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 68,
        "name": "Hirthick",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_68.jpg",
        "intro": "Personalized Paths to String Perfection",
        "activity": {
          "id": 13,
          "name": "Violin"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 69,
        "name": "Amrita Srivastava",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_69.jpg",
        "intro": "Learning Made Fun and Meaningful",
        "activity": {
          "id": 20,
          "name": "Science"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 70,
        "name": "Jehashree",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_70.jpg",
        "intro": "Harmonizing Tradition with Fun",
        "activity": {
          "id": 80,
          "name": "Carnatic music"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 400,
            "offer_currency": "₹",
            "offer_location": "in person"
          },
          {
            "offer_type": "trial",
            "offer_price": 0,
            "offer_currency": "₹",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 70,
        "name": "Jehashree",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_70.jpg",
        "intro": "Harmonizing Tradition with Fun",
        "activity": {
          "id": 22,
          "name": "Music"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          },
          {
            "offer_type": "standard",
            "offer_price": 3.5,
            "offer_currency": "€",
            "offer_location": "in person"
          },
          {
            "offer_type": "trial",
            "offer_price": 0,
            "offer_currency": "00",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 70,
        "name": "Jehashree",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_70.jpg",
        "intro": "Harmonizing Tradition with Fun",
        "activity": {
          "id": 87,
          "name": "Sholkas"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 250,
            "offer_currency": "₹",
            "offer_location": "in person"
          },
          {
            "offer_type": "trial",
            "offer_price": 0,
            "offer_currency": "₹",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 71,
        "name": "Noorul Zain",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_71.png",
        "intro": "Empowering Youth, Shaping Leaders",
        "activity": {
          "id": 23,
          "name": "Personality Development"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 72,
        "name": "Syeda Noorul Zoha",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_72.jpg",
        "intro": "Bringing Color to Life",
        "activity": {
          "id": 5,
          "name": "Painting"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "trial",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 73,
        "name": "Khushi Gupta",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_73.jpg",
        "intro": "Dance Your Heart Out",
        "activity": {
          "id": 26,
          "name": "Dance"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 74,
        "name": "Heena Jain",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_74.jpeg",
        "intro": "Write Your Way to Success",
        "activity": {
          "id": 18,
          "name": "Handwriting"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 75,
        "name": "Shweta Thakur",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_75.jpg",
        "intro": "Crafting Artistic Journeys",
        "activity": {
          "id": 24,
          "name": "Art"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 75,
        "name": "Shweta Thakur",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_75.jpg",
        "intro": "Crafting Artistic Journeys",
        "activity": {
          "id": 19,
          "name": "Resin Art"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 76,
        "name": "Zarna Thakkar",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_76.png",
        "intro": "Making Phonics, English  Grammar and Hindi Fun and Accessible",
        "activity": {
          "id": 25,
          "name": "Phonics"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          },
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          },
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 77,
        "name": "Ritu Sethi",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_77.jpeg",
        "intro": "From Basics to Brilliance: Master the Piano with Joy",
        "activity": {
          "id": 11,
          "name": "Piano"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 77,
        "name": "Ritu Sethi",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_77.jpeg",
        "intro": "From Basics to Brilliance: Master the Piano with Joy",
        "activity": {
          "id": 78,
          "name": "Keyboard"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 90,
        "name": "Pooja Agarwal",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_90.jpg",
        "intro": "\"Art brings colour to life\" like the child n so every child is an artist😊",
        "activity": {
          "id": 5,
          "name": "Painting"
        },
        "new": true,
        "top": false,
        "verified": false,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 200,
            "offer_currency": "rupee",
            "offer_location": "in person"
          },
          {
            "offer_type": "standard",
            "offer_price": 250,
            "offer_currency": "rupee",
            "offer_location": "in person"
          },
          {
            "offer_type": "trial",
            "offer_price": 0,
            "offer_currency": "rupee",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 99,
        "name": "Priya Goswami ",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_99.png",
        "intro": "Where Every Shot Tells a Story",
        "activity": {
          "id": 47,
          "name": "Photography"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 100,
        "name": "Sanskruti Patil",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_100.png",
        "intro": " ",
        "activity": {
          "id": 9,
          "name": "Chess"
        },
        "new": true,
        "top": false,
        "verified": true,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 5,
            "offer_currency": "€",
            "offer_location": "in person"
          }
        ]
      },
      {
        "coach_id": 101,
        "name": "janreign",
        "rating": 0,
        "profile_image": "https://api.buzzup.club/static/coach_101.jpg",
        "intro": "FB page: Guitar Workout Ph. We offer guitar lessons for complete beginners. We are from Philippines. The fee is P5,000 Philippine peso only for 10 sessions. ",
        "activity": {
          "id": 12,
          "name": "Guitar"
        },
        "new": true,
        "top": false,
        "verified": false,
        "offer": [
          {
            "offer_type": "standard",
            "offer_price": 500,
            "offer_currency": "Philippine Peso",
            "offer_location": "in person"
          }
        ]
      }
    ]
  }

  getFAQ(){
    return [
      {
        "category": "About Us",
        "question": "What is buzzup.club?",
        "answer": "buzzup.club is a platform to connect coaches, parents, and children for extracurricular activities and programs."
      },
      {
        "category": "About Us",
        "question": "What are the objectives of buzzup.club?",
        "answer": "We serve dual purpose - A. we aim to provide a centralized platform where parents can easily find and connect with qualified coaches/hobbyists for various activities, fostering holistic development for children and B. we want to help coaches expand their reach globally and improve their own branding"
      },
      {
        "category": "General",
        "question": "How are payments handled on buzzup.club?",
        "answer": "Currently we do not process payments and believe that coaches and parents can agree at the most convenient way for them. If providing a secure payment method would help in achieving our objectives, we will integrate them soon. "
      },
      {
        "category": "General",
        "question": "How are the rates for classes decided?",
        "answer": "Coaches set their own rates, and parents can choose payment options that best suit them, including one-time payments or recurring subscriptions. However, we do advice coaches to keep it as low as possible so that parents/kids can try and explore many activities and then gain expertise in whatever they like."
      },
      {
        "category": "General",
        "question": "What features does buzzup.club offer?",
        "answer": "buzzup.club provides features such as search and filter functionality to find coaches based on location and activity type, messaging capabilities for communication between parents and coaches and a review system for feedback. For any suggestions, please feel free to write on info@buzzup.club"
      },
      {
        "category": "Parents",
        "question": "How can I find the right coach for my child on buzzup.club?",
        "answer": "Use our search and filter options to browse coaches based on location, activity type, and reviews. You can also message coaches directly to discuss your child's needs and your preferences. And do make use of trial classes offered by most of our coaches."
      },
      {
        "category": "Parents",
        "question": "How can buzzup.club benefit my child's development?",
        "answer": "By engaging in extracurricular activities through buzzup.club, your child can cultivate essential life skills such as leadership, teamwork, creativity, and resilience, setting them up for success in all aspects of life."
      },
      {
        "category": "Parents",
        "question": "What types of activities are available for my child on buzzup.club?",
        "answer": "From sports and arts to STEM and beyond, buzzup.club provides a vast array of activities tailored to suit every interest and personality. Whether your child dreams of scoring goals on the field or painting masterpieces, we have something for everyone. And it is an ever growing list, so hopefully you will always find something new on the platform."
      },
      {
        "category": "Parents",
        "question": "How can I help my child discover their passions through buzzup.club?",
        "answer": "Explore our platform together with your child to discover a world of possibilities. With our easy-to-use search and filter options, you can browse activities based on your child's interests, allowing them to explore and experiment until they find their true calling."
      },
      {
        "category": "Coaches",
        "question": "What is in it for me?",
        "answer": "Have you always wondered what would it take for you to share your knowledge/skill/passion with others. How can you move further and make your passion also part of your work. Join buzzup.club and we will help you in your journey. We have spoken to many like yourself and understood that getting initial traffic is a big gap. You might not be natural at marketing and selling your skills. We will help you exactly there. buzzup.club is an online platform designed to connect coaches, parents, and children for extracurricular activities and co-curricular programs. Moreover coaching is not just about imparting knowledge; it's about igniting a spark in others and witnessing their growth firsthand. Through coaching on buzzup.club, you have the opportunity to inspire, mentor, and empower learners, making a positive difference in their lives and shaping the leaders of tomorrow."
      },
      {
        "category": "Coaches",
        "question": "Why should I join buzzup.club as a coach?",
        "answer": "At buzzup.club, we celebrate your passion for teaching and mentoring. Joining our platform gives you the opportunity to share your expertise with eager learners, make a meaningful impact, and inspire the next generation of talent. As a coach on buzzup.club, you have a platform to shine and share your unique talents with a wide audience. Whether you're a seasoned professional or a passionate enthusiast, we provide the tools and support to help you reach aspiring learners who are eager to benefit from your knowledge."
      },
      {
        "category": "Coaches",
        "question": "How can I join buzzup.club as a coach?",
        "answer": "You can sign up as a coach on our platform by creating a profile and providing information about your qualifications, experience, and the activities you offer."
      },
      {
        "category": "Coaches",
        "question": "What types of activities can I offer as a coach on buzzup.club?",
        "answer": "Whether you're an expert in sports, arts, music, story telling, photography,.. or any other field, buzzup.club welcomes coaches from diverse backgrounds and specialties. Your passion and expertise are what make you stand out, and we encourage you to share your skills in any area you're passionate about."
      },
      {
        "category": "About Us",
        "question": "What are the expectations for users on buzzup.club?",
        "answer": "We expect all users to conduct themselves professionally and respectfully. Coaches are expected to deliver high-quality instruction, while parents are encouraged to provide constructive feedback."
      },
      {
        "category": "General",
        "question": "Does buzzup.club provide any special offers or incentives?",
        "answer": "We occasionally collaborate with coaches to offer special deals or packages for users. Check our platform regularly for any ongoing promotions."
      }
    ]
  }

  getAboutBuzzup(){
    return {
      "title": "About BuzzUp",
      "content_list": [
        {
          "id": 1,
          "type": "text",
          "content": "We're a group of passionate parents who encountered the challenges of finding quality extracurricular and co-curricular activities for our kids. We understand firsthand how difficult it can be to connect with the right coaches and programs that match our children's interests and schedules. That's why we created Buzzup.club - to provide an easy and seamless way for parents to discover and connect with talented coaches from around the world, offering a wide range of activities both in-person and online."
        },
        {
          "id": 2,
          "type": "text",
          "content": "Our dedicated team brings together expertise in technology, product development, and marketing to make this vision a reality. We're committed to building a supportive community that nurtures young talents and provides parents with the tools they need to unlock their children's potential."
        }
      ]
    }
  }

  getAboutTeam(){
    return {
      "title": "BuzzUp Team",
      "content_list": [
        {
          "id": 1,
          "type": "card",
          "content": {
            "title": "Akansha Goyal",
            "image": "https://api.buzzup.club/static/team/akansha.jpg",
            "content": "Our product guru, focusing on creating innovative features and ensuring the platform meets the needs of our community."
          }
        },
        {
          "id": 2,
          "type": "card",
          "content": {
            "title": "Kumar Rahul",
            "image": "https://api.buzzup.club/static/team/rahul.jfif",
            "content": "Our tech wizard, ensuring that Buzzup.club runs smoothly and securely, providing a user-friendly experience for both parents and coaches."
          }
        },
        {
          "id": 3,
          "type": "card",
          "content": {
            "title": "Stuti",
            "image": "https://api.buzzup.club/static/team/stuti.jpg",
            "content": "One of our marketing enthusiasts, bringing creativity and strategic insight to spread the word about Buzzup.club and grow our community."
          }
        },
        {
          "id": 4,
          "type": "card",
          "content": {
            "title": "Soumya",
            "image": "https://api.buzzup.club/static/team/soumya.png",
            "content": "One of our marketing enthusiasts, specializing in building engaging campaigns and connecting with parents and coaches through various channels social media channels."
          }
        }
      ]
    }
  }
}
