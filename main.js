import * as fs from 'fs';

module.exports = function() {
  'use strict'

  const rawData = fs.readFileSync('data.json')
  const data = JSON.parse(rawData)

  const sources = data.idina_response.sources
  
  // console.log(sources)

  const spamScoreArr = sources.map(item => item.spam_score)
  const domainAuthArr = sources.map(item => item.domain_authority)

  // console.log({spamScoreArr, domainAuthArr})

  const spamCounts = {}
  const domainCounts = {}

  for (const num of spamScoreArr) {
    spamCounts[num] = spamCounts[num] ? spamCounts[num] + 1 : 1
  }

  for (const num of domainAuthArr) {
    domainCounts[num] = domainCounts[num] ? domainCounts[num] + 1 : 1
  }

  // console.log({spamCounts, domainCounts})

  const duplicateSpamScores = sources.filter(item => spamCounts[item.spam_score] > 1).map(item => item.url)
  const duplicateDomainAuth = sources.filter(item => domainCounts[item.domain_authority] > 1).map(item => item.url)

  const solution = ({duplicate_spam_scores: duplicateSpamScores, duplicate_domain_authorities: duplicateDomainAuth})

  // console.log(solution)

  return solution
}
