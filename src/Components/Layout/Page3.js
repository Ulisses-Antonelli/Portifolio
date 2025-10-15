import React from "react";
import InfoBanner from "../InfoBanner/InfoBanner";
import styles from "./Page3.module.css";

export default function Page3() {
    return (
        <div style={{
            height: '100%',
            maxHeight: '100%',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            boxSizing: 'border-box'
        }}>
            <InfoBanner
                title="Sobre"
                description="Projetista de Estruturas Metálicas"
                icon={false}
            />

            <div className={styles.contentContainer}>
                {/* Resumo Profissional e Principais Competências lado a lado */}
                <div className={styles.twoColumnsGrid}>
                    <div className={styles.infoCard}>
                        <h2 className={styles.cardTitle}>Resumo Profissional</h2>
                        <p className={styles.cardText}>
                            Profissional com mais de 14 anos de experiência em projetos.
                            <br /><br />
                            Domínio completo do ciclo de desenvolvimento de projetos estruturais, abrangendo concepção, dimensionamento, detalhamento executivo, projetos de fabricação e montagem com ênfase em estruturas metálicas.
                            <br /><br />
                            Conhecimentos avançados em ferramentas de modelagem estrutural (mCalc3D para estruturas metálicas) e experiência avançada com AutoCAD, incluindo desenvolvimento de rotinas em AutoLISP. Também possuo conhecimentos complementares em programação fullstack: JavaScript, Python, Kotlin, Node e VBA.
                        </p>
                    </div>

                    <div className={styles.infoCard}>
                        <h2 className={styles.cardTitle}>Principais Competências</h2>
                        <ul className={styles.competenciesList}>
                            <li>Projetos de modo geral com AutoCAD (modelagem 3D, desenho técnico e experiência em rotinas AutoLISP)</li>
                            <li>Desenvolvimento de projetos BIM com Tekla Structures</li>
                            <li>Cálculo estrutural, dimensionamento de estruturas metálicas e ligações</li>
                            <li>Análise de Viabilidade Técnica, interpretação e compatibilização de projetos</li>
                            <li>Conhecimentos Avançados em Softwares de Engenharia: mCalc3D, mCalcLIG e mCalcAC (cálculo de estruturas metálicas, ligações e mistas); STCadem (modelagem, projeto e detalhamento); Tekla Structures (modelagem BIM); AutoCAD 2D e 3D; Excel e pacote Office (VBA)</li>
                            <li>Conhecimentos complementares em programação: Python, Kotlin, Node, JavaScript, banco de dados</li>
                        </ul>
                    </div>
                </div>

                {/* Formação */}
                <div className={styles.sectionContainer}>
                    <h2 className={styles.sectionTitle}>Formação</h2>
                    <div className={styles.infoCard}>
                        <h3 className={styles.subsectionTitle}>Ensino Superior e Técnico</h3>
                        <ul className={styles.formationList}>
                            <li className={styles.formationItem}>
                                Tecnologia em Desenvolvimento de Software Multiplataforma – <strong>FATEC Zona Leste</strong>
                                {" "}
                                <a
                                    href="https://fateczl.edu.br/arquivos/Grade%20DSM.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.gradeButton}
                                >
                                    Link para grade do curso
                                </a>
                            </li>
                            <li>Tecnologia em Construção Civil - Controle de Obras - <strong>FATEC Tatuapé - Victor Civita</strong></li>
                            <li>Técnico em Mecânica - Modalidade Projetos Mecânicos - <strong>ETEC Prof.ª Aprígio Gonzaga</strong></li>
                        </ul>
                    </div>
                </div>

                {/* Experiência Profissional */}
                <div className={styles.sectionContainer}>
                    <h2 className={styles.sectionTitle}>Experiência Profissional</h2>

                    <div className={styles.experienceCard}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardRole}>Projetista - Autônomo</h3>
                            <span className={styles.cardPeriod}>12/2022 – Atualmente</span>
                        </div>
                        <p className={styles.cardDescription}>
                            Atuação no desenvolvimento de projetos executivos para diferentes tipologias estruturais, como mezaninos, coberturas, passarelas, plataformas e pontes. Também trabalho na realização de cálculos estruturais com ênfase em estruturas metálicas, sempre em conformidade com as normas e regulamentações técnicas. Pude colaborar diretamente com os clientes em busca da compreensão das necessidades, apresentando soluções e no gerenciamento de prazos, recursos e colaboração direta com a obra.
                        </p>
                    </div>

                    <div className={styles.experienceCard}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardRole}>Projetista de Estruturas Metálicas – MODO Engenharia</h3>
                            <span className={styles.cardPeriod}>06/2018 a 06/2022</span>
                        </div>
                        <p className={styles.cardDescription}>
                            Desenvolvimento de projetos BIM no Tekla Structures para compatibilização e volumetria, atuação na elaboração de projetos de modo geral, mas na maior parte do tempo com ênfase em estruturas metálicas. Trabalhei na criação de modelos de cálculo no mCalc3D e Strap, assim como pude propor soluções juntamente com outras disciplinas em função da compatibilidade e viabilidade técnica. Atuei no atendimento aos relatórios de clientes sob a demanda de revisões e alinhamentos sobre alterações.
                        </p>
                    </div>

                    <div className={styles.experienceCard}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardRole}>Projetista de Estruturas Metálicas – Knijnik Engenharia Integrada</h3>
                            <span className={styles.cardPeriod}>02/2014 a 06/2018</span>
                        </div>
                        <p className={styles.cardDescription}>
                            De 2014 a 2018 trabalhei na Knijnik Engenharia Integrada. Inicialmente prestei apoio aos engenheiros como desenhista projetista, mas a partir de 2016, tive oportunidade de aprender a calcular utilizando os softwares de cálculo. Com essa experiência adquirida passei a colaborar no desenvolvimento e dimensionamento das estruturas metálicas. Durante esse período também fui responsável pela modelagem BIM dos projetos em estrutura metálica, onde buscávamos a integração completa dos projetos com as demais disciplinas.
                        </p>
                    </div>

                    <div className={styles.experienceCard}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.cardRole}>Desenhista Projetista – Montreaço Indústria e Comércio de Estruturas Metálicas LTDA</h3>
                            <span className={styles.cardPeriod}>11/2009 a 02/2014</span>
                        </div>
                        <p className={styles.cardDescription}>
                            Desenvolvimento e modelagem 3D no Tekla Structures para projetos de estruturas metálicas. Criação de diagramas de montagem detalhados para otimização nos processos de fabricação e montagem. Elaboração de projetos de fabricação, garantindo qualidade e eficiência na produção. Acompanhamento no processo de fabricação para assegurar a conformidade com os padrões de projeto e especificações técnicas estabelecidas. Orientação sobre o processo de montagem aos líderes responsáveis pelas obras. Geração dos arquivos CNC para corte e furação das peças.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}