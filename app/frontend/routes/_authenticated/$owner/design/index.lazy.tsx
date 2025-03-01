import { createLazyFileRoute } from '@tanstack/react-router';
import {
  Button,
  CloseButton,
  IconButton,
  LinkButton,
  SubmitButton
} from '@rhino-project/ui-heroui';

export const Route = createLazyFileRoute('/_authenticated/$owner/design/')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <div className="flex flex-col flex-wrap gap-4">
      <div className="flex flex-wrap gap-4">
        <Button id="Button">Button</Button>
        <Button id="Button-with-loading-true" isLoading>
          Button Loading
        </Button>
        <IconButton id="IconButton" icon="bi:check">
          IconButton
        </IconButton>
        <SubmitButton id="SubmitButton">SubmitButton</SubmitButton>
        <LinkButton id="LinkButton" to=".">
          LinkButton
        </LinkButton>
        <LinkButton id="LinkIconButton" showAnchorIcon to=".">
          LinkIconButton
        </LinkButton>
        <CloseButton id="CloseButton" />
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
      <div className="flex flex-wrap gap-4 items-center">
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="faded">
          Faded
        </Button>
        <Button color="primary" variant="bordered">
          Bordered
        </Button>
        <Button color="primary" variant="light">
          Light
        </Button>
        <Button color="primary" variant="flat">
          Flat
        </Button>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
        <Button color="primary" variant="shadow">
          Shadow
        </Button>
      </div>
    </div>
  );
}
