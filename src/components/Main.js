import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

import ReactTooltip from 'react-tooltip';


const Main = () => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
        >
            <Stack spacing={{ xs: 1, sm: 2, md: 4 }}>

                <TextField
                    id="search-bar"
                    label={<SearchIcon />}
                    variant="outlined"
                    placeholder="KPOP 아티스트, 곡명, 별명..."
                />

                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    alignItems="center"
                    justify="center"
                    margin-top="0">
                    <p data-tip="BLACKPINK">
                        <Link to='/profile/blackpink'>
                            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fimgnews.naver.net%2Fimage%2F5305%2F2021%2F02%2F10%2F0000011396_001_20210225155833417.jpeg&type=sc960_832" alt="" className="picture" />
                        </Link>
                    </p>
                    <ReactTooltip
                        place='bottom'
                        effect='solid' />

                    <p data-tip="BTS">
                        <Link to='/profile/bts'>
                            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA5MTZfMTkx%2FMDAxNjMxNzg1NzY0MTI4.l6seMoMqJ24FDQ2N2dzHv_H2lBNZY36uEENhj7tbkuUg.GjgPRSuFVp6EIJSX8fePNLWycGI02pauH69U-UHu8EAg.PNG.woohj99%2F21d8db0cb3a24e94fa5633cbb5b265571227fe0cd35c7f5562f25ab245c7f0a1_16317822276.png&type=sc960_832" alt="" className="picture" />
                        </Link>
                    </p>
                    <ReactTooltip
                        place='bottom'
                        effect='solid' />

                    <p data-tip="TWICE">
                        <Link to='/profile/twice'>
                            <img src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDEyMjRfMjQ1%2FMDAxNjA4ODA4MzM4ODYy.-8u8-p9pZATE9Qhmc22N7-r5bio1fp78RmlhQaWoHGIg.R85Z9mZhg_b8sHiuPg_kZxIcaLCryoVf5vO0NB2LyCMg.JPEG.hairsalon-h_n%2FKakaoTalk_20201224_201001918.jpg&type=sc960_832" alt="" className="picture" />
                        </Link>
                    </p>
                    <ReactTooltip
                        place='bottom'
                        effect='solid' />
                </Stack>
            </Stack>
        </Box >
    )
}

export default Main