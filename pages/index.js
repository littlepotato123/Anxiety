import Link from 'next/link'

export default function Home() {
  return ( 
    <div>
      <h1>Types of Anxiety</h1>
      <ul>
        <li>Panic Disorder: Experiencing recurring panic attacks at unexpected times. A person with panic disorder may live in fear of the next panic attack</li> 
        <li>Phobia: Excessive fear of a specific object, situation, or activity</li>
        <li>Social Anxiety Disorder: Extreme fear of being judged by others in social situations</li>
        <li>Obsessive-Compulsive Disorder: Recurring irrational thoughts that lead you to perform specific, repeated behaviors</li>
        <li>Seperation Anxiety Disorder: Fear of being away from home or loved ones</li>
        <li>Illness Anxiety Disorder: Anxiety about your health (formerly called hypochondria)</li>
        <li>Post-traumatic Stress Disorder (PTSD): Anxiety following a traumatic event</li>
      </ul>
      <h1>Meditation</h1>
      <li><p>
        As a fellow student, although anxiety is not something I am diagnosed with but I still face anxiety and stress all the time. In my day-to-day life as a student, I get stressed before quizzes, nights before huge assesments and essays, and even regular time management issues with homework. Headspace is a recent addition to my life, and over the past 11 months headspace has helped me solve stress through my life indirectly. My life has changed in different scenarios and overall I have become a much better person to handle issues and in-general a better person. Before quizzess, instead being stressed and quickly cramming for the quiz, headspace taught me how to handle issues using just the breath. This is a tool that I would recommend for anybody, but especially students that struggle with handling anxiety because it helps calming a person just by using their breath. Therefore, it is a useful technique because it can be done anywhere and with anyone.
      </p></li>
      <li>
        <a className="head" href="https://www.headspace.com/"><img src="data:image/png;base64,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" /></a></li>
      <h1>Symptoms of Anxiety</h1>
      <ul>
        <li>Increased Heart Rate</li>
        <li>Rapid Breathing</li>
        <li>Restlessness</li>
        <li>Trouble Concentrating</li>
        <li>Difficulty Falling Asleep</li>
      </ul>
      <h1>What is an Anxiety Attack</h1>
      <p></p>
      <ul>
        <li>Feeling Faint or Dizzy</li>
        <li>Shortness of Breath</li>
        <li>Dry Mouth</li>
        <li>Sweating</li>
        <li>Chills or Hot Flashes</li>
        <li>Apprehension and worry</li>
        <li>Restlessness</li>
        <li>Distress</li>
        <li>Fear</li>
        <li>Numbness or Tingling</li>
      </ul>
      <h1>Tests to Diagnose Anxiety</h1>
      <p>There is not a single to determine whether a patient has anxiety, but instead there is a lengthy process of physical examinations, mental evaluations, and psychological questionnaires. Some doctors conduct physical exams such as blood and uring tests to rule out other conditions. Some anxiety tests are not to determine if anxiety exists, but instead the severity of the diagnosis.</p>
      <h1>Treatments for Anxiety</h1>
      <p>There are two types of treatments and they are based on the severity of the anxiety, the preference of the patient, and also based on what the medical practitioners recommends.</p>
      <ul>
        <li>
          <h1>Psychotherapy</h1>
          <p>Meeting with a therapist can help patients learn tools to use and strategies to cope with anxiety when it occurs. This can also help with having an outlet, preventing some symptoms, and understanding how to live with some symptoms.</p>
        </li>
        <li>
          <h1>Medication</h1>
          <p>
            Medications typically used to treat anxiety include antidepressants and sedatives, and they work to balance brain chemistry, prevent episodes of anxiety, and ward off the most severe symptoms of the disorder.
          </p>
        </li>
        <li>
          <Link href="/coping">Coping Strategies</Link>
        </li>
      </ul>
      <h2>Natural Remedies</h2>
      <ul>
        <li>Yoga</li>
        <li>Getting Enough Sleep</li>
        <li>Meditating</li>
        <li>Staying Active Excercising</li>
        <li>Eating a Healthy Diet</li>
        <li>Avoiding Alcohol</li>
        <li>Avoiding Caffeine</li>
        <li>Quitting Smoking Cigarettes</li>
        <li>
          <Link href="/coping">Coping Strategies</Link>
        </li>
      </ul>
      <h1>Therapies for Anxiety</h1>
      <ul>
        <li>
          <h2>Talk Therapy</h2>
          <p>
            Also known as psychotherapy, where stress is remedied by communication to identify and solve issues that cause emotional distress. This helps because it serves as an outlet for people that prefer to verbalize their stress.
          </p>
        </li>
        <li>
          <h2>Art Therapy</h2>
          <p>
            Art therapy involves allowing kids to make art for their own relaxation and sometimes for therapists to interpret. This works because children who are unable to communicat etheir feelings and built-up stress can express it through art.
          </p>
        </li>
        <li>
          <h2>Deep Pressure Therapy</h2>
          <p>
            Deep Pressure Therapy consists of applying gentle but firm pressure to the body with a pressure garment. This helps because it is similar to hugging and creating a comfortable environment where stress melts away.
          </p>
        </li>
      </ul>
      <h1>Anxiety and Stress</h1>
      <p>
        They both are two sides of the same coin. Stress is the result of demands on your brain or body. It can be caused by an event or activity that makes one nervous. Anxiety is that same worry or uneasiness.
      </p>
      <h2>Common Symptoms</h2>
      <ul>
        <li>Headache</li> 
        <li>Stomache</li>
        <li>Fast Heartbeat</li>
        <li>Sweating</li>
        <li>Dizziness</li>
        <li>Jitteriness</li>
        <li>Muscle Tension</li>
        <li>Rapid Breathing</li>
        <li>Panic</li>
        <li>Nervousness</li>
        <li>Difficulty Concentrating</li>
        <li>Irrational Anger or Irritability</li>
        <li>Restlessness</li>
        <li>Sleeplessness</li>
      </ul>
      <h3>Anxiety and Stress are both a negative and positive and can act as an incentive for some. But with the same issue, it can be the downfall to others.</h3>
      <h1>Sources</h1>
      <ul>
        <li>
          <a href="https://www.healthline.com/health/anxiety">Information about Anxiety</a>
        </li>
        <li>
          <a href="https://www.healthline.com/health/mental-health/talk-therapy">Therapy Information</a>
        </li>
      </ul>
    </div>
  )
}
