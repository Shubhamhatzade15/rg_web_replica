import React from "react";
import StayInLoop from "../constituency/StayInLoop";

export default function BustingMyths() {
  return (
    <>
      <div className="p-4 px-6 lg:px-60 md:px-20 text-sm text-justify">
        <div className="">
          <h1 className="text-4xl text-[#337ab7] my-4">Myth Buster</h1>
          <p className="my-2">
            &quot;A lie can travel halfway around the world while the truth is
            still putting its shoes on&quot;
          </p>
          <p className="my-2">
            Here, for your entertainment, are some of the craziest tales spun by
            the opposition&apos;s propaganda factory. And the truth.
          </p>
        </div>
        <div className="my-8">
          <h2 className="font-bold text-lg">
            What about the viral video where Rahul Gandhi speaks about &apos;aloo ki
            factory&apos;?
          </h2>
          <p className="my-2">
            Context is everything. That bit was a fragment of an interaction
            with distressed farmers in Uttar Pradesh. One farmer suggested a
            potato chip factory in the region, to which Mr Gandhi responded. The
            entire interaction is presented here (comment in question at 1.22)
            Farmers&apos; concerns and agricultural policy are clearly not as &apos;viral&apos;
            as a sentence plucked out of context by an opposition more
            comfortable with jeering than thinking.
          </p>

          <div className="aspect-video w-full bg-black">
            <video className="h-full w-full" controls>
              <source
                src="/assets/LandingPage/video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="my-8">
          <h2 className="font-bold text-lg">
            Wait, another aloo question. Why did he talk of a machine that would
            turn potatoes into gold (aloo se sona niklega)?
          </h2>
          <p className="my-2">
            That is indeed a ludicrous thing to say. Only, Rahul Gandhi didn&apos;t
            make that claim, he was making fun of the prime minister&apos;s
            outrageous promises. Again, a fragment of the speech was deviously
            presented by the BJP&apos;s team, to suggest the very opposite. Here is
            the full video, for those who care about the truth.
          </p>

          <div className="aspect-video w-full bg-black">
            <video className="h-full w-full" controls>
              <source
                src="/assets/LandingPage/video.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="my-8">
          <h2 className="font-bold text-lg">
            Why did he claim that connecting MRI machines would improve
            healthcare in India?
          </h2>
          <p className="my-2">
            In a question about healthcare, one of the the ideas that Mr Gandhi
            referred to was the internet of things. Connecting devices like MRI
            machines, CT scanners and other equipment through the cloud and
            analysing their findings is an important part of diagnosis and care.
            This data-driven approach is the future of healthcare, and it is
            already a reality in many parts of the world. So Rahul Gandhi was
            referring to a global trend that his critics may not yet be aware
            of.
          </p>
          <p className="my-2">
            For those who want to know more, here is a handy article from the
            <a href="/" className="text-blue-400">
              {" "}
              Economist
            </a>
          </p>
        </div>
        <div className="my-8">
          <h2 className="font-bold text-lg">
            What in the world did he mean by escape velocity of Jupiter?
          </h2>
          <p className="my-2">
            Rahul Gandhi was speaking about the extra push needed for Dalits to
            reach the same footing as others. As a socially disadvantaged
            community, it takes greater effort for them to shake off the
            downward pull of their environment. Just like it takes greater
            energy to escape Jupiter&apos;s gravitational field than that of earth.
          </p>
          <p className="my-2">
            Escape velocity is also a commonly used term in social research -
            take this example from
            <a href="/" className="text-blue-400">
              {" "}
              Harvard Research
            </a>
          </p>
          <p className="my-2">
            It&apos;s not that hard to understand, even for the BJP.
          </p>
        </div>
        <div className="my-8">
          <h2 className="font-bold text-lg">
            Why did he say &apos;poverty is a state of mind&apos;?
          </h2>
          <p className="my-2">
            Rahul Gandhi had said that apart from material deprivation, poverty
            is also a state of mind. This is borne out by social science
            research on the psychogical effects and insecurities created by
            scarcity and precarity.
          </p>
          <p className="my-2">
            Media headlines mangled his words to suggest he said poverty is only
            a state of mind. As usual, the BJP cried hoarse. The Dalit Resource
            Centre of the Gobind Ballabh Pant Social Science Institute, where
            Rahul Gandhi made the statement, clarified the facts, and most
            newspapers carried corrections the next day, but the damage was
            done. Deliberately. Read: Hindustan Times, Indian Express
          </p>
        </div>
        <div className="my-8">
          <h2 className="font-bold text-lg">
            Why did his “woke up this morning, last night” go viral?
          </h2>
          <p className="my-2">
            Because to err is human, and to mock is the BJP. It was a slip of
            the tongue. Happens to everyone, especially those whose words are
            constantly watched.
          </p>
          <p className="my-2">
            This list is likely to keep growing. Lies will continue being
            generated, because the only limits are in the BJP&apos;s imagination.
            Some of these allegations, though, are more serious and
            unconscionable than others:
          </p>
        </div>
        <div className="my-8">
          <h2 className="font-bold text-lg">
            What is the truth about the Sukanya rape case?
          </h2>
          <p className="my-2">
            This charge, cooked up by political opponents and peddled on foreign
            websites, was struck down by the Supreme Court of India for being
            “without substance and without an iota of evidence” . Not only that,
            the court heavily fined the petitioners for causing reputational
            damage to Rahul Gandhi. Half of that penalty was due to Rahul
            Gandhi, and half to the woman who they claimed had been raped. Read:
            NDTV, Mint
          </p>
          <p className="my-2">
            That this malicious lie continues to lurk in a right-wing
            echo-chamber shows that some people are impervious to the truth and
            contemptuous of due legal process. They will go to any length to
            discredit someone they don&apos;t like.
          </p>
        </div>
        <div className="my-8">
          <h2 className="font-bold text-lg">
            Was Rahul Gandhi detained in Boston with drugs?
          </h2>
          <p className="my-2">
            No. Those sharing these fantasies, without offering even a shred of
            evidence, are obviously smoking something strong.
          </p>
        </div>
      </div>
    </>
  );
}
