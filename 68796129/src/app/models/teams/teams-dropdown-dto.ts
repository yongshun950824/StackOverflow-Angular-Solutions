export class TeamDto {
  id: number;
  name: string;
  description: string;
  accountId: string;
  status: string;
  teamMembersDto: TeamMembersDropdownDto[];
  teamTransactionDetailsDto: TeamTransactionDetailsDto[];
}

export class TeamMembersDropdownDto {
  id: number;
  firstName: string;
  lastName: string;
  memberId: number;
  roleDto: any[];
}

export class TeamTransactionDetailsDto {}
