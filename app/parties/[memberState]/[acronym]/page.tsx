
interface PartyPageProp {
  params: {
    memberState: string,
    acronym: string
  }
}

export default async function PartyPage({ params }: PartyPageProp) {
  const acronym = decodeURIComponent(params.acronym) as string;
  const { memberState } = params;
  // const party = await getParty(acronym, memberState);

  return (<div>LOL</div>)
  // if (!party) {
  //   return null;
  // }
  // const { description } = party;

  // return (
  //   <>
  //     <PartyHeader party={party} subtitle='' />
  //     <PartyIntro title='Party description'>
  //       {!description ?
  //         <Paragraph>Description not available yet</Paragraph>
  //         :
  //         <Paragraph>{description}</Paragraph>
  //       }
  //     </PartyIntro>
  //     <PartyCandidatesList acronym={acronym} />
  //   </>
  // )
}

// export async function generateStaticParams(): Promise<{ memberState: string, acronym: string }[]> {
//   return await getAllMemberStatesAndParties();
// }

// async function getAllMemberStatesAndParties(): Promise<{ memberState: string, acronym: string }[]> {
//   const spreadhseet = await getSpreadsheet(process.env.COMMON_DATA_SPREADHSEET_ID ?? '');
//   const parties = await spreadhseet.sheetsByIndex[1].getRows();

//   return parties.map(p => ({
//     memberState: (p.get(SpreadsheetField.MEMBER_STATE) as string).toLowerCase(),
//     acronym: (p.get(SpreadsheetField.ACRONYM) as string).toLowerCase()
//   }))
// }

// async function getParty(acronym: string, memberState: string): Promise<Party> {
//   // use memberState to know which folder go to get data from
//   const spreadhseet = await getSpreadsheet(process.env.COMMON_DATA_SPREADHSEET_ID ?? '');
//   const partiesSheet = await spreadhseet.sheetsByIndex[1].getRows();

//   return partiesSheet
//     .filter(p => {
//       const sheetAcronym = p.get(SpreadsheetField.ACRONYM) as string;
//       return convertPartyAcronymToUrl(sheetAcronym) === acronym;
//     })
//     .map((p, index) => ({
//       id: index,
//       acronym: p.get(SpreadsheetField.ACRONYM),
//       name: p.get(SpreadsheetField.NAME),
//       hasManifesto: false,
//       logoUrl: p.get(SpreadsheetField.LOGO_URL),
//       website: p.get(SpreadsheetField.WEBSITE),
//       description: p.get(SpreadsheetField.DESCRIPTION),
//       memberState: p.get(SpreadsheetField.MEMBER_STATE) as MemberState,
//       politicalGroupAcronym: p.get(SpreadsheetField.POLITICAL_GROUP_ACRONYM) as PoliticalGroupEnum
//     }))[0];
// }
