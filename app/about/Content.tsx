import React from 'react'
import {
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinFill,
  RiGoogleFill,
} from "react-icons/ri";



const Content = () => {
  return (
    <div
      className={`relative -top-0 md:-top-10 lg:-top-20 bg-white mx-0 md:mx-10 lg:mx-52 p-4 sm:p-8`}
    >
      <div className="px-4 md:px-10">
        <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center">
          <div className="order-2 md:order-1 text-3xl">About Rahul Gandhi</div>
          <div className="order-1 md:order-2 grid grid-cols-4 gap-2 text-xl">
            <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
              <RiFacebookFill />
            </div>
            <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
              <RiTwitterFill />
            </div>
            <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
              <RiLinkedinFill />
            </div>
            <div className="flex justify-center items-center size-6 md:size-10 bg-[#4F9DD8] text-white">
              <RiGoogleFill />
            </div>
          </div>
        </div>

        {/* Bread crumb */}


        {/* Project Details */}

        <div
          className={`content-ized mt-5 text-justify text-sm md:text-base`}
        >
          <p>
          Through his life, Rahul Gandhi has always been the strongest proponent of politics of purpose. Over the years, he has lent his voice to a number of issues but has always remained focused on propagating non-violence, equality and justice. He has imbibed these virtues through a lifelong tryst with Indian politics and history and has developed a keen understanding of the Indian social fabric. Having experienced the pain of losing both his father and grandmother to acts of violence and hatred, Rahul Gandhi  has always been a champion of Gandhian philosophies of ahimsa and truth.
          </p>
          <br />
          <p>
          Born on 19 June 1970, Rahul Gandhi spent his early childhood between Delhi, the political center of India, and Dehradun, a town nestled in the valley between the Himalayas and Shivaliks. He began his undergraduate career at Delhi’s St. Stephen’s College before moving to Harvard University in the USA. In his second year, Rahul transferred to Rollins College in Florida due to security threats following his father’s, the late Prime Minister Rajiv Gandhi’s, assassination. Rahul Gandhi graduated with a Bachelor’s degree in 1994. The year after, he obtained his M. Phil from Trinity College, Cambridge.
          </p>
          <br />
          <p>
          Rahul began his professional career with the Monitor Group, a management consulting firm based out of London - he was adamant on creating a professional career before joining politics. He soon returned to India and set up his own technology consultancy in Mumbai, where he led his team as the Director. The influence of his work in the management and technology sector is apparent in his political leanings. Rahul has always been a strong proponent of harnessing the scale and dexterity that technology can lend while amplifying the power of India’s greatest asset — her citizens.
          </p>
          <br />
          <p>
            To bolster the efforts of the district administration during the
            lockdown, 50 thermal scanners, 20000 masks and 1000 liters of
            sanitizer were donated. 28,000 kgs rice and 5600 kgs of pulses were
            contributed to the community kitchens. Since a significant number of
            people with other health ailments, especially kidney and liver
            related conditions require assistance, a one-time medical assistance
            of Rs. 28 lakhs was announced to help 1000 needy patients. Further,
            assistance was provided to constituents stranded in different parts
            of the country during the lockdown.
          </p>
          <br />
          <p>
          The call to serve our nation and to be an instrumental part of her growth came to Rahul Gandhi in 2004. He chose to stand from his father’s constituency and continue the legacy of serving the people of Amethi in Uttar Pradesh.
          </p>
          <p>
          Rahul won his first election with an overwhelming margin of 2,90,853 votes — a testament to the faith placed by the people of his constituency in him. From the beginning, it was apparent that Rahul believed that our nation’s future lies with her people. Through the ebbs and flows of a decade-long political career, Rahul has held true to the very principles that won him the hearts of the people in his very first election.
          </p>
          <br />
          <p>
          In 2013, Rahul Gandhi was elected as the Vice-President of the Congress Party. Within the Congress party, Rahul Gandhi played the key role of channeling the party along the lines of Congress’ core principles. He tirelessly worked to democratise the student wing and youth wing of the Congress party and ensured a breath of fresh air entered the grand old party by encouraging young leaders to take up leadership positions. His pivotal role in shaping the party along Congress’ core values over his political career earned him the post of President of the Congress Party in 2017. Under Rahul Gandhi’s guidance, the Congress Party has once again emerged as the voice of the nation.
          </p>
          <br />
          <p>
          While he was President of the Opposition party, Rahul Gandhi played a key role in raising the demands of various stakeholders of the country. He championed the rights of the poor & the marginalised. He led the battle against the ruling government on poorly implemented policies such as Demonetisation, Aadhar, GST and more.
          </p>
          <br />
          <p>
          The vision of Rahul Gandhi and his strategy to fight the democratic battle with love and unity is what makes the Congress Party the true representative of a united India. Going forward, he aims to put these principles into action by creating systems that provide India’s citizens with the tools and opportunities they need to reach their full potential.
          </p>
          <br />
          <p>
          In his current role as a Member of Parliament in the 17th Lok Sabha, he represents the constituency of Wayanad in Kerala. After leaving his position as President of the Congress party, he has put all his focus & energy in representing the people of Wayanad & taking on the government on a number of issues, like the undemocratic abrogation of Article 370 & the violation of human rights by the government in Kashmir. He remains steadfast in his quest for truth, peace & harmony for the people of India.
          </p>
          <br />

        </div>
      </div>
      </div>
  )
}

export default Content