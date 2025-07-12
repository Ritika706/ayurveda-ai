import React from 'react';
import { useEffect, useRef, useState } from 'react';
import '../styles/Symptoms.css';
import arrowImg from '/images/down-arrow.png';
import paperPlane from '/images/paper-airplane.png';
import likeImg from '/images/like.png';

export default function Symptoms() {
  const textRef = useRef(null);
  const solBtnRef = useRef(null);
  const [textValue, setTextValue] = useState('');

  useEffect(() => {
    const buttons = document.querySelectorAll('.main-buttons button');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const currentBgColor = getComputedStyle(btn).backgroundColor;
        const currentColor = getComputedStyle(btn).color;

        if (
          currentBgColor === 'rgb(248, 121, 48)' &&
          currentColor === 'rgb(255, 255, 255)'
        ) {
          btn.style.backgroundColor = '';
          btn.style.color = '';
        } else {
          btn.style.backgroundColor = 'rgb(248, 121, 48)';
          btn.style.color = 'white';
        }
      });
    });

    // Cleanup to remove event listeners on unmount
    return () => {
      buttons.forEach((btn) => {
        const clone = btn.cloneNode(true);
        btn.replaceWith(clone);
      });
    };
  }, []);

  const handleTextChange = (e) => {
    const value = e.target.value;
    setTextValue(value);

    if (textRef.current) {
      textRef.current.style.border =
        value.trim() !== ''
          ? '1px solid orange'
          : '1px solid rgb(196 209 196)';
    }

    if (solBtnRef.current) {
      solBtnRef.current.style.opacity = value.trim() !== '' ? '1' : '0.5';
    }
  };

  return (
    <div className="box">

      <div className="arrow">
        <button
          className="arrow-btn"
          onClick={() => (window.location.href = 'landing page.html')}
        >
          <img className="arrow-img" src={arrowImg} alt="" />
          Back
        </button>
      </div>

      <header className="header">
        <div className="heart">
          <img src={likeImg} alt="" />
        </div>
        <h1 className="header-heading">Share Your Health Concerns</h1>
        <p className="header-text">
          Describe your symptoms or health goals in your own words. Our AI will
          analyze your concerns through an Ayurvedic lens to provide
          personalized recommendations.
        </p>
      </header>

      <main>
        <div className="main-head">
          <div className="main-top-head">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-brain mr-2 h-5 w-5 text-orange-600"
            >
              <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
              <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path>
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
              <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
              <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
              <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
              <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
            </svg>
            <p>Describe Your Symptoms</p>
          </div>
          <div className="main-bottom-head">
            <p>
              Be as detailed as possible. Include how you feel physically,
              mentally, and emotionally.
            </p>
          </div>
        </div>

        <div className="main-mid">
          <p>Tell us about your health concerns</p>
          <textarea
            ref={textRef}
            onChange={handleTextChange}
            value={textValue}
            placeholder="For example: I've been feeling very tired lately, especially in the afternoons. I also have trouble sleeping and my skin has been dry. I feel stressed at work and sometimes get headaches..."
          ></textarea>
        </div>

        <div className="main-foot">
          <p>Or select common symptoms (optional)</p>
          <div className="main-buttons">
            {[
              'Fatigue',
              'Sleep Issues',
              'Digestive Problems',
              'Stress',
              'Anxiety',
              'Headaches',
              'Joint Pain',
              'Skin Issues',
              'Hair Fall',
              'Weight Gain',
              'Low Energy',
              'Mood Swings',
              'Concentration Issues',
              'Back Pain',
              'Bloating',
              'Constipation',
              'Irregular Periods',
              'Cold Hands/Feet',
            ].map((symptom, index) => (
              <button key={index} name="symptom" id={symptom}>
                {symptom}
              </button>
            ))}
          </div>

          <button className="get-solution" ref={solBtnRef} style={{ opacity: 0.5 }}>
            <img src={paperPlane} alt="submit" />
            Get Personalized Recommendations
          </button>
        </div>
      </main>

      <footer>
        <div class="card">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-leaf h-8 w-8 text-green-600 mx-auto mb-2"
              data-lov-id="src/components/SymptomInput.tsx:133:14"
              data-lov-name="Leaf"
              data-component-path="src/components/SymptomInput.tsx"
              data-component-line="133"
              data-component-file="SymptomInput.tsx"
              data-component-name="Leaf"
              data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-green-600%20mx-auto%20mb-2%22%7D"
            >
              <path
                d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
              ></path>
              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
            </svg>
            <p>Holistic Analysis</p>
          </div>
          <p>
            Our AI considers your symptoms from a complete Ayurvedic
            perspective, looking at physical, mental, and emotional aspects.
          </p>
        </div>

        <div class="card">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-sparkles h-8 w-8 text-purple-600 mx-auto mb-2"
            >
              <path
                d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
              ></path>
              <path d="M20 3v4"></path>
              <path d="M22 5h-4"></path>
              <path d="M4 17v2"></path>
              <path d="M5 18H3"></path>
            </svg>
            <p>Personalized Plan</p>
          </div>
          <p>
            Receive custom recommendations for herbs, diet, lifestyle changes,
            and daily routines based on your unique needs.
          </p>
        </div>

        <div class="card">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-brain h-8 w-8 text-blue-600 mx-auto mb-2"
              data-lov-id="src/components/SymptomInput.tsx:157:14"
              data-lov-name="Brain"
              data-component-path="src/components/SymptomInput.tsx"
              data-component-line="157"
              data-component-file="SymptomInput.tsx"
              data-component-name="Brain"
              data-component-content="%7B%22className%22%3A%22h-8%20w-8%20text-blue-600%20mx-auto%20mb-2%22%7D"
            >
              <path
                d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
              ></path>
              <path
                d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
              ></path>
              <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path>
              <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"></path>
              <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path>
              <path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path>
              <path d="M19.938 10.5a4 4 0 0 1 .585.396"></path>
              <path d="M6 18a4 4 0 0 1-1.967-.516"></path>
              <path d="M19.967 17.484A4 4 0 0 1 18 18"></path>
            </svg>
            <p>AI Guidance</p>
          </div>
          <p>
            Chat with our AI wellness guide anytime for follow-up questions and
            ongoing support on your healing journey.
          </p>
        </div>
      </footer>
    </div>
  );
}
