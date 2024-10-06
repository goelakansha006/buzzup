import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  apiUrl: string = 'https://api.buzzup.club';
  constructor(private httpClient: HttpClient) { 


   
  }

  getActivities(){
    return this.httpClient.get(this.apiUrl + '/v1/search/activities');
      
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
    return this.httpClient.get(this.apiUrl + '/v1/communication/faq');
    
  }

  getAboutBuzzup(){
    return this.httpClient.get(this.apiUrl + '/v1/communication/about/buzzup');
  }

  getAboutTeam(){
    return this.httpClient.get(this.apiUrl + '/v1/communication/about/team');
  }

  getUserData(coachId: number){
    return this.httpClient.get(this.apiUrl + '/v1/coach/profile/view/'+coachId);
  }

  getOfferDetails(offerId : number){
    return this.httpClient.get(this.apiUrl + '/v1/coach/offer/view/'+offerId);
  }
}
