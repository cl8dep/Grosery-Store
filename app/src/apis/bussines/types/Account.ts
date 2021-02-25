import AccountStatus from '../AccountStatus';
import { AccountRole } from '../AccountRole';

interface Account {
  firstName: string | undefined,
  lastName: string | undefined,
  email: string | undefined,
  role: AccountRole | undefined,
  status: AccountStatus | undefined,
  cellphone: string | undefined,
  address: string | undefined,
}

export default Account;
