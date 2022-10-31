import RecruitDetail from "../../App/Detail/RecruitDetail";

function RecruitDetailPage({ data }) {
  console.log(data);
  return (
    <>
      <RecruitDetail props={data} />
    </>
  );
}
export default RecruitDetailPage;
