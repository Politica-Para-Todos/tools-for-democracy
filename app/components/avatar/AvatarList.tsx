
interface AvatarListProp {
  theme: string
}

export default async function AvatarList({ theme }: AvatarListProp) {
  // const politicalGroups = await getAllPoliticalGroups();
  return (
    <div>LOL</div>
  )

};

// export async function getAllPoliticalGroups(): Promise<PoliticalGroup[]> {
//   const spreadhseet = await getSpreadsheet(process.env.COMMON_DATA_SPREADHSEET_ID ?? '');
//   const politicalGroups = await spreadhseet.sheetsByIndex[0].getRows();

//   return politicalGroups.map((pg, index) => ({
//     id: index,
//     acronym: pg.get(SpreadsheetField.ACRONYM),
//     name: pg.get(SpreadsheetField.NAME),
//     logoUrl: pg.get('LOGO_URL')
//   }))
// }
