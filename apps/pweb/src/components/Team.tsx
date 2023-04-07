import { TeamMember } from "./TeamMember";


export const Team = () => {
  return <section className="px-4 md:px-0 py-6 md:py-8 mt-12" id="team">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-2xl md:text-3xl text-center mb-6 md:mb-6 font-bold">
      Our Team
    </h2>
    <ul className="flex flex-col gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3">
      <TeamMember/>
      <TeamMember/>
      <TeamMember/>
      <TeamMember/>
      <TeamMember/>
      <TeamMember/>
    </ul>
  </div>
</section>

}