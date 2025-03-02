import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute(
  '/_authenticated/$owner/design/typography'
)({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <>
      <h1>h1 - Heading</h1>
      <h2>h2 - Heading</h2>
      <h3>h3 - Heading</h3>
      <h4>h4 - Heading</h4>
      <h5>h5 - Heading</h5>
      <h6>h6 - Heading</h6>
      <h1 className="display-1">Display 1</h1>
      <h1 className="display-2">Display 2</h1>
      <h1 className="display-3">Display 3</h1>
      <h1 className="display-4">Display 4</h1>
      <h1 className="display-5">Display 5</h1>
      <h1 className="display-6">Display 6</h1>
      <p className="lead">
        This is a lead paragraph. It stands out from regular paragraphs.
      </p>
      <p>
        p - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
        neque eros. Aliquam porta nunc id dignissim luctus. Pellentesque varius
        felis quis tincidunt ornare. In non urna dolor. Vestibulum ullamcorper
        eros sit amet lorem hendrerit congue. Vestibulum malesuada efficitur
        nunc nec porttitor. Suspendisse consequat risus quis laoreet aliquam.
        Pellentesque sit amet nunc accumsan sem pharetra sollicitudin in eget
        neque.
      </p>
      <p>
        Morbi semper, ligula eget imperdiet consectetur, diam est venenatis
        elit, aliquet efficitur sem lectus id sem. Ut augue nulla, condimentum
        et nulla nec, malesuada sollicitudin purus. Sed ac enim interdum,
        efficitur tortor vitae, mattis arcu. Donec nec mattis risus, ut sodales
        sem. Nam tincidunt fermentum eleifend. Maecenas iaculis magna ut nibh
        rhoncus volutpat vitae a nunc. Fusce venenatis elit nec urna dictum
        laoreet. Curabitur eu ultrices lectus. Morbi mollis eros leo, a
        fermentum sem porttitor dictum. Quisque cursus justo quis ornare
        posuere. Praesent hendrerit placerat justo, quis cursus nibh tempus vel.
        Nullam condimentum nec ipsum non posuere. Sed consequat diam dui,
        vulputate aliquam magna consectetur sit amet. Sed id sollicitudin
        lectus. Duis non eleifend eros.
      </p>
    </>
  );
}
