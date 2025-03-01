import { createLazyFileRoute } from '@tanstack/react-router';
import DesignSystemPage from '../../../pages/design/DesignSystemPage';

export const Route = createLazyFileRoute('/_authenticated/$owner/design')({
  component: DesignSystemPage
});
