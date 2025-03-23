import Card from "@/features/common/components/Card";
import Grid from "@/features/common/components/Grid";

type Work = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link?: string;
};

type WorksResult = {
  works: Work[];
};

const Works = async () => {
  const worksResponse = await fetch(process.env.WORK_API_URL as string, {
    cache: "force-cache",
  });
  const worksResult: WorksResult = await worksResponse.json();
  const { works } = worksResult;

  return (
    <Grid centered={true}>
      {works.map((work, index) => (
        <>
          {/* TODO: Cardのpropsの型指定がいけてないから直したい */}
          {work.link ? (
            <Card
              key={index}
              imageUrl={work.imageUrl}
              imageAlt={work.title}
              title={work.title}
              description={work.description}
              footerType="link"
              href={work.link}
              buttonText="詳細へ"
            />
          ) : (
            <Card
              key={index}
              imageUrl={work.imageUrl}
              imageAlt={work.title}
              title={work.title}
              description={work.description}
            />
          )}
        </>
      ))}
    </Grid>
  );
};

export default Works;
